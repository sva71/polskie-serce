<template>
    <div class="top-panel">
        Top Panel
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
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
}

</style>
