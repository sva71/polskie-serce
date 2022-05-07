<template>

    <div class="polish-heart" id="about">
        <div class="top-block">
            <div class="kalyna-img">
                <div class="circle1"></div>
            </div>
            <div class="top-block-text">
                <div class="top-block-text-title">
                    <p>TeofiPolskie Serce</p>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                </div>
                <div class="top-block-text-paragraphs">
                    <p class="top-block-text-paragraphs-p">{{ topBlock.p1 }}</p>
                    <p class="top-block-text-paragraphs-p">{{ topBlock.p2 }}</p>
                    <p class="top-block-text-paragraphs-p">{{ topBlock.p3 }}</p>
                </div>
                <div class="top-block-text-blue-line"></div>
            </div>
        </div>
        <div class="mid-block">
            <div class="mid-block-paragraphs">
                <p class="top-block-text-paragraphs-p">{{ midBlock.p1 }}</p>
                <p class="top-block-text-paragraphs-p">{{ midBlock.p2 }}</p>
                <p class="top-block-text-paragraphs-p">{{ midBlock.p3 }}</p>
            </div>
        </div>
        <div class="bottom-block">
            <div class="yellow-line"></div>
        </div>
    </div>

</template>


<script>

export default {

    name: "PolishHeart",

    data() {
        return {
            topBlock: {
                p1: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. ' +
                    'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia',
                p2: 'Tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, ' +
                    'pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z ',
                p3: 'Publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym ' +
                    'różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji'
            },
            midBlock: {
                p1: 'Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten ' +
                    'chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele ' +
                    'różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, ' +
                    'sprawiającego, że wygląda to „zbyt czytelnie” po polsku. ',
                p2: 'Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w ' +
                    'internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż ' +
                    'są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, ' +
                    'czasem specjalnie (humorystyczne wstawki itd).',
                p3: 'Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie'
            }
        }
    }

}

</script>


<style scoped lang="scss">

.polish-heart {
    width: 100%;
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.top-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .kalyna-img {
        width: 558px;
        height: 656px;
        position: relative;
        background: url("../assets/img/kalyna.png");
        @media (max-width: 560px) {
            display: none;
        }
        .circle1 {
            width: 160px;
            height: 160px;
            position: absolute;
            left: -80px;
            top: 576px;
            border-radius: 50%;
            background-color: var(--cl-red);
            opacity: 0.3
        }
    }
    &-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-title {
            height: 95px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            position: relative;
            p {
                font-family: Gilroy-Bold, sans-serif;
                font-size: 50px;
            }
            .circle2 {
                width: 36px;
                height: 36px;
                position: absolute;
                left: 17px;
                top: -12px;
                border-radius: 50%;
                background-color: var(--cl-red);
                @media (max-width: 500px) {
                    display: none;
                }
            }
            .circle3 {
                width: 36px;
                height: 36px;
                position: absolute;
                left: 0;
                top: 0;
                color: var(-cl-black);
                border: 6px solid black;
                border-radius: 50%;
                @media (max-width: 500px) {
                    display: none;
                }
            }
        }
        &-paragraphs {
            width: 460px;
            @media (max-width: 470px) {
                width: 95%;
                margin: auto;
            }
            &-p {
                margin-top: 16px;
                font-size: 20px;
                line-height: 26px;
                color: var(--cl-gray);
            }
        }
        &-blue-line {
            width: 98px;
            height: 8px;
            margin: 0 auto;
            border-radius: 10px;
            background-color: var(--cl-blue);
        }
    }
}

.mid-block {
    margin-top: 128px;
    &-paragraphs {
        width: 950px;
        @media (max-width: 1000px) {
            width: 95%;
            margin: auto;
        }
    }
}

.yellow-line {
    width: 98px;
    height: 8px;
    margin: 100px auto 0;
    border-radius: 10px;
    background-color: var(--cl-yellow);
}

</style>
