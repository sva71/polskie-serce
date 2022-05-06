<template>
    <div style="overflow-x: hidden; position: relative;" id="#landing">
        <div class="circle1"></div>
        <div class="circle2">
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
        </div>
        <div class="circle6"></div>
        <div class="wrapper">
            <div class="lang-panel">
                <select name="lang" id="lang-select" @change="langChange($event)">
                    <option v-for="lang of langs">{{ lang }}</option>
                </select>
            </div>
            <TopPanel :lang="langs[activeLang]" />
            <MainPage :lang="langs[activeLang]" />
        </div>
        <PolishHeart />
<!--        <Projecting />-->
        <Accounts :lang="langs[activeLang]" />

    </div>
</template>

<script>

import TopPanel from "./components/TopPanel.vue";
import MainPage from "./components/MainPage.vue";
import PolishHeart from "./components/PolishHeart.vue";
import Projecting from "./components/Projecting.vue";
import Accounts from "./components/Accounts.vue";

export default {

    components: {
        PolishHeart,
        TopPanel,
        MainPage,
        Projecting,
        Accounts
    },

    data() {
        return {
            langs: ['PL', 'UK'],
            activeLang: 0
        }
    },

    methods: {

        langChange($event) {
            this.activeLang = $event.target.selectedIndex;
            console.log(this.activeLang);
        }

    }

}

</script>


<style scoped lang="scss">

.wrapper {
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 170px;
    overflow-y: scroll;
    @media (max-width: 800px) {
        margin: 50px 20px;
    }
}

.circle1 {
    position: absolute;
    top: calc(-20vmin / 2);
    left: calc(-20vmin / 2);
    width: 20vmin;
    height: 20vmin;
    border: 1px solid black;
    border-radius: 50%;
    background-color: var(--cl-red);
    opacity: 0.05;
}

.circle2 {
    position: absolute;
    top: -8vh;
    left: 75%;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    background-color: var(--cl-red);
}

.circle3 {
    position: absolute;
    top: 70%;
    left: 25%;
    width: 14vmin;
    height: 14vmin;
    border-radius: 50%;
    background-color: white;
}

.circle4 {
    position: absolute;
    top: 20%;
    left: -20%;
    width: 11vmin;
    height: 11vmin;
    border-radius: 50%;
    background-color: var(--cl-blue);
}

.circle5 {
    position: absolute;
    top: 40%;
    left: -20%;
    width: 5vmin;
    height: 5vmin;
    border-radius: 50%;
    background-color: var(--cl-yellow);
}

.circle6 {
    position: absolute;
    top: 50vh;
    left: 9%;
    width: 4vmin;
    height: 4vmin;
    border-radius: 50%;
    background-color: var(--cl-red);
    opacity: 0.3;
}

.lang-panel {
    position: fixed;
    top: 15px;
    right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 11;
    #lang-select {
        height: 30px;
        font-size: 16px;
        border: 1px solid var(--cl-light);
        border-radius: 4px;
        margin-left: 20px;
    }
}

</style>
