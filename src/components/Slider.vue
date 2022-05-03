<template>

    <carousel :items-to-show="itemsToShow" style="width: 1206px;">
        <slide v-for="card in cardData" :key="card">
            <Card :card="card" />
        </slide>

        <template #addons>
            <pagination />
        </template>
    </carousel>

</template>


<script>

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from "./Card.vue";

export default {

    name: "Slider",

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Card
    },

    props: {
        cardData: []
    },

    data() {
        if (window.innerWidth >= 1200) {
            return {
                itemsToShow: 3
            }
        } else {
            if (window.innerWidth >= 600) {
                return {
                    itemsToShow: 2
                }
            } else {
                return {
                    itemsToShow: 1
                }
            }
        }
    },

    mounted() {
        console.log(window.innerWidth);
    }

}

</script>


<style scoped lang="scss">

.carousel {
    text-align: left;
    @media (max-width: 1206px) {
        width: 100%;
    }
}

.carousel__pagination {
    margin-top: 30px;
}

</style>
