<template>

    <div class="proj">

        <div class="proj-title">
            <p>{{ title }}</p>
            <div class="proj-title-circle"></div>
        </div>

        <div class="proj-cards">
            <div v-for="card in cards">
                <Card :card="card" />
            </div>
        </div>

    </div>

</template>


<script>

import Card from "./Card.vue";

export default {

    name: "Projecting",

    components: {
        Card
    },

    data() {
        return {
            title: 'Projektowanie',
            cards: [
                {
                    title: 'Skąd się to wzięło',
                    text: 'W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym ' +
                        'tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, ' +
                        'czyli ponad 2000 lat temu! Richard ...'
                },
                {
                    title: 'McClintock, wykłado',
                    text: 'łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z ' +
                        'najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł ' +
                        'niezaprzeczalne źródło: Lorem Ipsum pochodz...'
                },
                {
                    title: 'De Finibus\n' +
                        'Bonorum ',
                    text: 'et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez ' +
                        'Cycerona. Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy ' +
                        'wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi...'
                }
            ]
        }
    }

}

</script>


<style scoped lang="scss">

.proj {
    width: 100%;
    margin-top: 187px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &-title {
        position: relative;
        p {
            font-family: Gilroy-Bold, sans-serif;
            font-size: 50px;
            line-height: 50px;
            z-index: 5;
            position: relative;
        }
        &-circle {
            width: 36px;
            height: 36px;
            position: absolute;
            top: -17px;
            left: -17px;
            border: 13px solid var(--cl-red);
            border-radius: 50%;
            z-index: 1;
        }
    }
    &-cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 68px;
    }
}

</style>
