<template>

    <div class="accounts" id="aid">
        <div class="accounts-left">
            <div class="accounts-left-title">{{ leftTitle[lang] }}</div>
            <div class="accounts-left-text">
                <p>{{ p1[lang] }}</p>
                <p>{{ p2[lang] }}</p>
                <p>{{ p3[lang] }}</p>
            </div>
        </div>
        <div class="accounts-right">
            <div class="accounts-right-info">
                <div class="accounts-right-info-requisites">
                    <div class="req" v-for="req of accountsData[lang]">
                        <div class="req-title">{{ req.reqTitle }}</div>
                        <div class="req-value" v-for="item of req.reqValue">{{ item }}</div>
                    </div>
                </div>
            </div>
            <div class="circles">
                <div class="circle-left"></div>
                <div class="circle-mid"></div>
                <div class="circle-right"></div>
            </div>
            <div class="circle7"></div>
        </div>
    </div>

</template>


<script>

export default {

    name: "Accounts",

    props: {
        lang: String
    },

    data() {
        return {
            leftTitle: {
                'PL': 'Wesprzyj potrzebujących i przybliż zwycięstwo',
                'EN': 'Each of your contributions supports those in need and brings victory closer',
                'UK': 'Кожен ваш внесок підтримує тих, хто потребує, та наближає перемогу'
            },
            p1: {
                'PL': 'Nie ma „zbyt małych” kwot ani „niepotrzebnych” darowizn. Poświęcając się fundacji, ' +
                    'dzielisz się nie tylko rzeczami, ale także odrobiną światła w swoim sercu.',
                'EN': 'There are no "too small" amounts or "unnecessary" contributions. By donating to the ' +
                    'foundation, you share not only material things, but also a piece of light inside your heart.',
                'UK': 'Не буває “Занадто маленьких” сум або “непотрібних” речових внесків. Жертвуючи у фонд, ' +
                    'ви ділитися не лише речами, але й частинкою світла всередині вашого серця.'
            },
            p2: {
                'PL': 'Jeśli chcesz zostać pracownikiem Fundacji lub brać udział w którejkolwiek z jej projektów, ' +
                    'skontaktuj się z nami.',
                'EN': 'If you want to become an employee of the fund or take part in any of its activities, ' +
                    'contact the following contacts.',
                'UK': 'Якщо ви хочете стати співробітником фонду чи взяти участь у будь-яких напрямах його ' +
                    'діяльності, звертайтеся за вказаними контактами.'
            },
            p3: {
                'PL': 'Możesz wnieść swój wkład w działalność fundacji i wesprzeć Ukraińców. Poniżej znajdziesz ' +
                    'dane do przelewu:',
                'EN': 'You can make your charitable contribution to the activities of the foundation and support ' +
                    'Ukrainians according to the following detail',
                'UK': 'Зробити свій благодійний внесок у діяльність фонду та підтримку українців ви можете за ' +
                    'наступними реквізитами:'
            },
            accountsData: {
                'PL': [
                    {reqTitle: 'Nazwa firmy', reqValue: ['TEOFIPOLSKIE SERCE FUNDACJA']},
                    {reqTitle: 'Kod IBAN', reqValue: [
                            'PLN: PL 65 1090 2851 0000 0001 4998 5967',
                            'EUR: PL 40 1090 2851 0000 0001 4998 6029',
                            'USD: PL 11 1090 2851 0000 0001 4998 6551',
                            'GBP: PL 30 1090 2851 0000 0001 4998 6597'
                        ]},
                    {reqTitle: 'Nazwa banku', reqValue: ['Santander Bank Polska']},
                    {reqTitle: 'Kod SWIFT banku', reqValue: ['WBKPPLPP']},
                    {reqTitle: 'Adres spółki', reqValue: ['Stawki 2A U1 Str, 00-193 Warszawa, Polska']}
                ],
                'EN': [
                    {reqTitle: 'Company name:', reqValue: ['TEOFIPOLSKIE SERCE FOUNDATION']},
                    {reqTitle: 'Kod IBAN', reqValue: [
                            'PLN: PL 65 1090 2851 0000 0001 4998 5967',
                            'EUR: PL 40 1090 2851 0000 0001 4998 6029',
                            'USD: PL 11 1090 2851 0000 0001 4998 6551',
                            'GBP: PL 30 1090 2851 0000 0001 4998 6597'
                        ]},
                    {reqTitle: 'Bank name', reqValue: ['Santander Bank Polska']},
                    {reqTitle: 'SWIFT code', reqValue: ['WBKPPLPP']},
                    {reqTitle: 'Address', reqValue: ['Stawki 2 U1, 00-193 Warsaw, Poland']}
                ],
                'UK': [
                    {reqTitle: 'Назва фірми', reqValue: ['ФУНДАЦІЯ "ТЕОФІПОЛЬСЬКЕ СЕРЦЕ"']},
                    {reqTitle: 'Kod IBAN', reqValue: [
                            'PLN: PL 65 1090 2851 0000 0001 4998 5967',
                            'EUR: PL 40 1090 2851 0000 0001 4998 6029',
                            'USD: PL 11 1090 2851 0000 0001 4998 6551',
                            'GBP: PL 30 1090 2851 0000 0001 4998 6597'
                        ]},
                    {reqTitle: 'Назва банку', reqValue: ['Santander Bank Polska']},
                    {reqTitle: 'Код SWIFT банку', reqValue: ['WBKPPLPP']},
                    {reqTitle: 'Адреса', reqValue: ['Ставки 2A U1, 00-193 Варшава, Польща']}
                ]
            }
        }
    },

}

</script>


<style scoped lang="scss">

.accounts {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 128px;
    &-left {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        &-title {
            color: var(--cl-black);
            font-family: Gilroy-Bold, sans-serif;
            font-weight: 400;
            font-size: 50px;
            position: relative;
            &:before {
                content: "";
                width: 36px;
                height: 36px;
                position: absolute;
                left: -60px;
                top: calc(100% - 44px);
                border: 13px solid var(--cl-red);
                border-radius: 50%;
                box-sizing: border-box;
            }
        }
        &-text {
            color: var(--cl-gray);
            font-size: 20px;
            line-height: 26px;
            p {
                margin-bottom: 16px;
            }
        }
    }
    &-right {
        width: 35%;
        height: 656px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 150px;
        border: 1px solid var(--cl-light);
        border-radius: 10px;
        z-index: 5;
        background: #FFFFFF url("../assets/img/ornament.png") no-repeat;
        background-position-x: 100%;
        background-position-y: center;
        &-info {
            width: 65%;
            height: 452px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            &-currency {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                &-label {
                    margin-right: 20px;
                    color: var(--cl-black);
                    font-family: Gilroy-Bold, sans-serif;
                    font-weight: 400;
                    font-size: 20px;
                }
                select {
                    height: 60px;
                    padding: 19px 20px;
                    border: 1px solid var(--cl-light);
                    border-radius: 10px;
                    font-size: 18px;
                }
                &-combo {
                    margin-bottom: 42px;
                }
            }
            &-requisites {
                .req {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;
                    &-title {
                        color: var(--cl-gray);
                        font-family: Gilroy-Medium, sans-serif;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 16px;
                    }
                    &-value {
                        color: var(--cl-red);
                        font-family: Gilroy-Regular, sans-serif;
                        font-weight: 400;
                        font-size: 19px;
                        line-height: 26px;
                    }
                }
            }
        }
        .circles {
            position: absolute;
            bottom: -60px;
            right: 0;
            display: flex;
            flex-direction: row;
            .circle-left, .circle-mid, .circle-right {
                width: 30px;
                height: 30px;
                margin-left: 30px;
                background-color: var(--cl-light);
                border-radius: 50%;
            }
            .circle-left {
                opacity: 0.4;
            }
            .circle-mid {
                opacity: 0.7;
            }
        }
    }
    &:after {
        content: "";
        width: 660px;
        height: 660px;
        position: absolute;
        top: calc(100% - 330px);
        left: calc(50% - 330px);
        border-radius: 50%;
        background: linear-gradient(180deg, #DC143C 0%, #FFFFFF 75.1%);
        opacity: 0.1;
        z-index: -10;
    }
}

.circle7 {
    width: 1188px;
    height: 1188px;
    position: absolute;
    bottom: 20%;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(180deg, #0057B7 0%, #EAEDFF 43.02%);
    opacity: 0.1;
    z-index: -1;
}

@media (max-width: 1200px) {
    .accounts {
        flex-direction: column;
    }
    .accounts-left, .accounts-right {
        width: 90%;
        margin: auto;
    }
}

@media (max-width: 560px) {
    .accounts-right, .accounts-right-info {
        width: auto;
        height: auto;
        padding: 10px;
    }
}

</style>

