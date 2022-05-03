<template>
    <div class="main-page" id="main">
        <div class="title">
            <p class="title-text">{{ titleText }}</p>
            <div class="red-line"></div>
        </div>
        <div class="subtitles">
            <span class="subtitle-text">{{ subtitleText1 }}</span>
            <span class="subtitle-text">{{ subtitleText2 }}</span>
        </div>
        <p class="content">{{ content }}</p>
        <div class="button" @click="donateClick">{{ buttonText }}</div>
    </div>
</template>


<script>

export default {

    name: "MainPage",

    data() {
        return {
            titleText: 'Lorem',
            subtitleText1: 'ipsum dolor',
            subtitleText2: 'consectetur adipiscing elit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At habitant iaculis sed mauris metus ' +
                'elit orci. Arcu hendrerit magna duis sed consectetur elementum sit senectus praesent.',
            buttonText: 'Donata'
        }
    },

    methods: {
        donateClick() {
            window.location.hash = 'main';
            window.location.hash = 'aid'
        }
    }

}

</script>


<style scoped lang="scss">

.main-page {
    width: 100%;
    height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}


.title-text {
    display: inline-block;
    color: var(--cl-black);
    font-family: Gilroy-Bold, sans-serif;
    font-size: 80px;
}

.red-line {
    display: inline-block;
    width: 98px;
    margin-left: 36px;
    border: 4px solid var(--cl-red);
    border-radius: 10px;
}

.subtitles {
    margin-top: 30px;
}

.subtitle-text {
    display: block;
    position: relative;
    font-family: Gilroy-Bold, sans-serif;
    font-size: 50px;
    word-wrap: normal;
}

.content {
    width: 50%;
    margin-top: 50px;
    font-size: 20px;
    color: gray;
}

.button {
    width: 197px;
    height: 68px;
    margin-top: 58px;
    padding: 19px 20px;
    color: white;
    background-color: var(--cl-red);
    font-family: Gilroy-Bold, sans-serif;
    font-size: 30px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: #EEEEEE;
    }
}

</style>
