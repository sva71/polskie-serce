<template>
    <div class="top-panel">
        <img src="../assets/img/logo.png" alt="">
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
        <div v-if="activeAnchor > 0" class="button small" @click="donateClick">Donata</div>
    </div>
</template>


<script>

export default {

    name: "TopPanel",

    data() {
        return {
            lang: 'PL',
            anchors: [
                { title: { 'PL': 'Główny', 'UK': 'Головна'}, id: 'main', enabled: true },
                { title: { 'PL': 'O nas', 'UK': 'Про нас' }, id: 'about', enabled: true },
                { title: { 'PL': 'Projektowanie', 'UK': 'Проекти' }, id: 'projecting', enabled: true },
                { title: { 'PL': 'Ambasadorzy', 'UK': 'Амбасадори' }, id: 'ambassadors', enabled: false },
                { title: { 'PL': 'Wzmacniacz', 'UK': 'Підсилювач' }, id: 'amplifier', enabled: false },
                { title: { 'PL': 'Pomoc', 'UK': 'Допомога' }, id: 'aid', enabled: true },
                { title: { 'PL': 'Szczegóły', 'UK': 'Подробиці'}, id: 'details', enabled: false },
                { title: { 'PL': 'Łączność', 'UK': 'Комунікація'}, id: 'communication', enabled: false }
            ],
            activeAnchor: 0,
            dropdownVisible: false
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
                window.location.hash = 'main';
                window.location.hash = this.anchors[index].id;
            }
        },

        donateClick() {
            window.location.hash = 'main';
            window.location.hash = 'aid'
        }

    }

}

</script>


<style scoped lang="scss">

.top-panel {
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
    z-index: 10;
    background-color: white;
}

.anchors {
    margin-left: 76px;
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
        height: 100%;
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
    width: 84px;
    height: 40px;
    font-size: 16px;
}

@media (max-width: 1100px) {
    .top-panel {
        justify-content: space-between;
    }
    .anchors {
        width: 50%;
    }
}

@media (max-width: 970px) {
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
