<template>
    <div class="top-panel" :class="{ pinned: activeAnchor }">
        <div class="logo"></div>
        <div v-if="activeAnchor" class="button small" @click="donateClick">{{ buttonText[lang] }}</div>
        <div class="anchors">
            <div class="anchors-menu">
                <div class="anchors-menu-item"
                     v-for="(item, index) in anchors"
                     :class="{ active: index === activeAnchor }"
                     @click="anchorClick(index)">
                    {{ item.title[lang] }}
                </div>
            </div>
            <p class="burger-symbol" @click="dropdownVisible = !dropdownVisible">&#9776;</p>
            <div v-if="dropdownVisible" class="burger-menu">
                <div class="burger-menu-panel">
                    <div class="burger-menu-items">
                        <p class="arrow" @click="dropdownVisible = false">&#8592;</p>
                        <div class="anchors-menu-item"
                             v-for="(item, index) in anchors"
                             :class="{ active: index === activeAnchor }"
                             @click="anchorClick(index)">
                            {{ item.title[lang] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lang-panel">
            <select name="lang" id="lang-select" @change="langChange($event)">
                <option v-for="item of langs" :selected="item === lang">{{ item }}</option>
            </select>
        </div>
    </div>
</template>


<script>

export default {

    name: "TopPanel",

    props: {
        lang: String
    },

    data() {
        return {
            langs: ['PL', 'EN', 'UK'],
            anchors: [
                { title: { 'PL': '', 'EN': '', 'UK': ''}, id: 'main', enabled: true },
                { title: { 'PL': 'O nas', 'EN': 'About us', 'UK': 'Про нас' }, id: 'about', enabled: true },
                // { title: { 'PL': 'Projektowanie', 'EN': 'Projects', 'UK': 'Проекти' }, id: 'projecting', enabled: true },
                // { title: { 'PL': 'Ambasadorzy', 'EN': 'Ambassadors', 'UK': 'Амбасадори' }, id: 'ambassadors', enabled: false },
                // { title: { 'PL': 'Wzmacniacz', 'EN': 'Amplifier', 'UK': 'Підсилювач' }, id: 'amplifier', enabled: false },
                { title: { 'PL': 'Pomoc', 'EN': 'Aid', 'UK': 'Допомога' }, id: 'aid', enabled: true },
                // { title: { 'PL': 'Szczegóły', 'EN': 'Details', 'UK': 'Подробиці'}, id: 'details', enabled: false },
                // { title: { 'PL': 'Łączność', 'EN': 'Communication', 'UK': 'Комунікація'}, id: 'communication', enabled: false }
            ],
            activeAnchor: 0,
            dropdownVisible: false,
            buttonText: {
                'PL': 'Donata',
                'EN': 'Donate',
                'UK': 'Допомогти'
            }
        }
    },

    mounted() {
        this.anchors.forEach(item =>
            item['offset'] = document.getElementById(item.id).offsetTop - document.getElementById(item.id).offsetHeight);
        window.addEventListener('scroll', () => {
            if (this.activeAnchor + 1 < this.anchors.length) {
                if (window.scrollY >= this.anchors[this.activeAnchor + 1].offset) {
                    this.activeAnchor++
                }
            }
            if (this.activeAnchor - 1 >= 0) {
                if (window.scrollY <= this.anchors[this.activeAnchor].offset) {
                    this.activeAnchor--;
                }
            }
            if (window.scrollY === 0) {
                this.activeAnchor = 0;
            }
        })
    },

    methods: {

        anchorClick(index) {
            if (this.anchors[index].enabled) {
                this.activeAnchor = index;
                window.location.hash = this.anchors[0].id;
                window.location.hash = this.anchors[index].id;
            }
        },

        home() {
            window.location.hash = this.anchors[0].id;
        },

        donateClick() {
            this.anchorClick(2);
        },

        langChange($event) {
            this.activeLang = $event.target.selectedIndex;
            this.$emit('lang-change', this.langs[$event.target.selectedIndex]);
        }

    }

}

</script>


<style scoped lang="scss">

.top-panel {
    width: calc(100% - 170px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    z-index: 10;
}

.pinned {
    position: fixed;
    background-color: white;
}

.logo {
    width: 146px;
    height: 30px;
    background: url("../assets/img/logo.png") no-repeat;
}

.anchors {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        &-item {
            margin-right: 30px;
            color: var(--cl-gray);
            font-size: var(--anchor-menu-font-size);
            line-height: var(--anchor-menu-line-height);
            cursor: pointer;
            transition: color 500ms;
            &:hover {
                color: var(--cl-rose);
            }
            &.active {
                color: var(--cl-red);
            }
        }
    }
    .burger-symbol {
        display: none;
        float: right;
        cursor: pointer;
        font-size: var(--burger-font-size);
    }
    .burger-menu {
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        color: var(--cl-gray);
        background: rgba(0, 0, 0, 0.75);
        &-panel {
            width: 60%;
            height: 100%;
            background: white;
            z-index: 5;
        }
        &-items {
            width: 100%;
            height: 50%;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            padding-left: 50px;
            background: white;
            border-radius: 4px;
            user-select: none;
            .arrow {
                width: 100%;
                cursor: pointer;
                user-select: none;
                font-family: Gilroy-Regular, sans-serif;
                font-size: var(--burger-font-size);
            }
        }
    }
}

.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--cl-red);
    font-family: Gilroy-Bold, sans-serif;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        color: #EEEEEE;
    }
}

.small {
    width: 94px;
    height: 40px;
    font-size: 16px;
}

.lang-panel {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    #lang-select {
        height: 30px;
        font-size: 16px;
        border: 1px solid var(--cl-light);
        border-radius: 4px;
    }
}

@media (max-width: 700px) {
    .top-panel {
        width: 100%;
    }
    .anchors {
        width: 10%;
        .anchors-menu {
            display: none
        }
        .burger-symbol {
            display: block;
        }
    }
}

@media (max-width: 300px) {
    #save-ukraine {
        display: none;
    }
}

</style>
