<template>
    <div class="main-page">
        <div class="title">
            <p class="title-text">{{ titleText[lang] }}</p>
            <div class="red-line"></div>
        </div>
        <div class="subtitles">
            <span class="subtitle-text">{{ subtitleText1[lang] }}</span>
            <span class="subtitle-text">{{ subtitleText2[lang] }}</span>
        </div>
        <p class="content">{{ content1[lang] }}</p>
        <p class="content">{{ content2[lang] }}</p>
        <div class="button big" @click="donateClick">{{ buttonText[lang] }}</div>
    </div>
</template>


<script>

export default {

    name: "MainPage",

    props: {
        lang: String
    },

    data() {
        return {
            titleText: {
                'PL': 'TeofiPolskie Serce',
                'EN': 'TeofiPolskie Serce',
                'UK': 'TeofiPolskie Serce'
            },
            subtitleText1: {
                'PL': 'Fundacja charytatywna',
                'EN': 'Charitable fung created by',
                'UK': 'Благодійний фонд, створений'
            },
            subtitleText2: {
                'PL': 'Stworzony przez Ukraińców dla Ukraińców',
                'EN': 'Ukrainians for Ukrainians',
                'UK': 'українцями для українців'
            },
            content1: {
                'PL': 'Wszechstronne i serdeczne wsparcie dla obywateli Ukrainy i osób pochodzenia ukraińskiego ' +
                    'w ich potrzebach fizycznych, materialnych i emocjonalnych. Musimy trzymać się razem!',
                'EN': 'Comprehensive and heartly support to the citizens of Ukraine and persons of Ukrainian ' +
                    'origin in their physical, material and emotional needs. We should stand together!',
                'UK': 'Всебічна й сердечна підтримка громадянам України та особам українського походження у ' +
                    'їхніх фізичних, матеріальних та емоційних потребах. Ми маємо триматися разом!'
            },
            content2: {
                'PL': '',
                'EN': 'You can make your contribution to our mutual mission here.',
                'UK': 'Зробити свій внесок у нашу спільну справу ти можеш тут.'
            },
            buttonText: {
                'PL': 'Donata',
                'EN': 'Donate',
                'UK': 'Допомогти'
            }
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--cl-red);
    font-family: Gilroy-Bold, sans-serif;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: #EEEEEE;
    }
}

.big {
    width: 197px;
    height: 68px;
    margin-top: 58px;
    padding: 19px 20px;
    font-size: 30px;
}

@media (max-width: 700px) {
    .title-text {
        font-size: 50px;
    }
    .subtitle-text {
        font-size: 30px;
    }
}

@media (max-width: 420px) {
    .title-text {
        font-size: 30px;
    }
    .subtitle-text {
        font-size: 20px;
    }
    .content {
        font-size: 16px;
    }
}

</style>
