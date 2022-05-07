<template>
    <div v-if="lang === 'RU'">
        <div class="red-wrapper">
            <div class="russian-ship">
                <p class="p1">Русский военный корабль</p>
                <p class="p2">Иди Нахуй!</p>
            </div>
        </div>
    </div>
    <div v-if="lang !== 'RU'" style="overflow-x: hidden; position: relative;" id="landing">
        <div class="circle1"></div>
        <div class="circle2">
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
        </div>
        <div class="circle6"></div>
        <div class="wrapper">
            <TopPanel v-on:lang-change="lang = $event" :lang="lang" />
            <MainPage :lang="lang" />
        </div>
        <PolishHeart :lang="lang" />
<!--        <Projecting />-->
        <Accounts :lang="lang" />
        <Footer :lang="lang" />
    </div>
</template>

<script>

import TopPanel from "./components/TopPanel.vue";
import MainPage from "./components/MainPage.vue";
import PolishHeart from "./components/PolishHeart.vue";
import Projecting from "./components/Projecting.vue";
import Accounts from "./components/Accounts.vue";
import Footer from "./components/Footer.vue";

export default {

    components: {
        PolishHeart,
        TopPanel,
        MainPage,
        Projecting,
        Accounts,
        Footer
    },

    data() {
        switch (window.navigator.language) {
            case 'pl-PL':
                return { lang: 'PL' }
            case 'uk-UA':
                return { lang: 'UK' }
            case 'ru-RU':
                return { lang: 'RU' }
            default: return { lang: 'EN' }
        }
    }

}

</script>


<style scoped lang="scss">

.red-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--cl-red);
}

.russian-ship {
    width: 90vmin;
    height: 90vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    background-color: white;
    .p1, .p2 {
        font-family: Gilroy-Bold, sans-serif;
        font-weight: 400;
    }
    .p1 {
        font-size: 50px;
        @media (max-width: 700px) {
            font-size: 30px;
        }
        @media (max-width: 420px) {
            font-size: 20px;
        }
        @media (max-width: 280px) {
            font-size: 16px;
        }
    }
    .p2 {
        font-size: 80px;
        @media (max-width: 700px) {
            font-size: 50px;
        }
        @media (max-width: 420px) {
            font-size: 30px;
        }
        @media (max-width: 280px) {
            font-size: 20px;
        }
    }
}

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
    top: 45vh;
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
