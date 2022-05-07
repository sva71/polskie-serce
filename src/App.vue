<template>
    <div style="overflow-x: hidden; position: relative;" id="landing">
        <div class="circle1"></div>
        <div class="circle2">
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
        </div>
        <div class="circle6"></div>
        <div class="wrapper">
            <TopPanel v-on:lang-change="lang = $event" />
            <MainPage />
        </div>
        <PolishHeart />
<!--        <Projecting />-->
        <Accounts :lang="lang" />
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
            lang: 'PL'
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

@media (max-width: 800px) {
    .wrapper {
        margin: 0;
        padding-left: 10px;
    }
}

</style>
