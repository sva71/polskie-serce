<template>
    <div class="card-wrapper">
        <p class="card-title">{{ card.title }}</p>
        <p class="card-text">{{ card.text }}</p>
        <div class="card-footer">
            <div class="card-divider"></div>
            <div class="footer-text">
                <p>Czytaj więcej</p>
                <img src="../assets/img/arrow.png" alt="Arrow_picture">
            </div>
        </div>
    </div>
</template>


<script>

export default {

    name: "Card",

    props: {
        card: Object
    }

}

</script>


<style scoped lang="scss">

.card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 362px;
    padding: 60px 40px;
    border: 1px solid var(--cl-light);
    border-radius: 10px;
    &:hover {
        box-shadow: 0 20px 30px rgba(128, 152, 213, 0.2)
    }
}

.card-title {
    height: 53px;
    font-family: Gilroy-Bold, sans-serif;
    font-size: 30px;
}

.card-text {
    margin-top: 40px;
    font-size: 20px;
    line-height: 26px;
    color: var(--cl-gray);
}

.card-divider {
    width: 100%;
    margin-top: 34px;
    border: 1px solid var(--cl-light);
}

.footer-text {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 21px;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 18px;
    color: var(--cl-red);
    cursor: pointer;
    p {
        margin-right: 10px;
    }
    img {
        width: 9px;
        height: 14px;
    }
}

</style>
