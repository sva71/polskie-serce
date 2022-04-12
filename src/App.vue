<template>
    <div class="wrapper" id="top">
        <div class="languages">
            <p v-for="lang in languages" class="lang-item"
               :class="{ active: activeLang === lang }" @click="changeLang(lang)">
                {{ lang }}
            </p>
        </div>
        <TopPanel :lang="activeLang" />
    </div>
</template>

<script>

import TopPanel from "./components/TopPanel.vue";

export default {

    components: {
        TopPanel
    },

    data() {
        return {
            languages: ['UK', 'PL'],
            activeLang: localStorage.getItem('polskieSerceLang') ? localStorage.getItem('polskieSerceLang') : 'UK'
        }
    },

    methods: {
        changeLang(lang) {
            this.activeLang = lang;
            localStorage.setItem('polskieSerceLang', lang);
        }
    }

}

</script>


<style lang="scss">

.wrapper {
    width: 100%;
    min-height: 100vh;
    padding-top: 20px;
    overflow-y: scroll;
    .languages {
        display: flex;
        flex-direction: row;
        float: right;
        margin-bottom: 7px;
        padding-right: 10px;
        .lang-item {
            margin-left: 10px;
            padding-bottom: 2px;
            cursor: pointer;
            user-select: none;
            &.active {

            }
        }
    }
}

</style>