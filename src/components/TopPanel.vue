<template>
    <div class="top-panel">
        <img src="../assets/img/logo.png" alt="">
    </div>
</template>


<script>

export default {

    name: "TopPanel",

    props: {
        lang: String
    }

}

</script>


<style scoped lang="scss">

.top-panel {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

</style>
