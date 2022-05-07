<template>

    <div class="accounts" id="aid">
        <div class="accounts-left">
            <div class="accounts-left-title">{{ leftTitle }}</div>
            <div class="accounts-left-text">
                <p>{{ p1 }}</p>
                <p>{{ p2 }}</p>
                <p>{{ p3 }}</p>
            </div>
        </div>
        <div class="accounts-right">
            <div class="accounts-right-info">
                <div class="accounts-right-info-currency">
                    <p class="accounts-right-info-currency-label">{{ currencyLabels[lang] }}</p>
                    <div class="account-right-info-currency-combo">
                        <select name="cur-combo" id="cur-combo" @change="currencyChange($event)">
                            <option v-for="name of currencyData.map(item => item[lang].currencyName)">{{ name }}</option>
                        </select>
                    </div>
                </div>
                <div class="accounts-right-info-requisites">
                    <div class="req" v-for="req of currencyData[activeCurrency][lang].requisites">
                        <div class="req-title">{{ req.reqTitle }}</div>
                        <div class="req-value">{{ req.reqValue }}</div>
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
            leftTitle: 'Szczegóły funduszu TeofiPolskie Serce',
            p1: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. ' +
                'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia ',
            p2: 'Tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, ' +
                'pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z ',
            p3: 'Publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym ' +
                'różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji',
            currencyLabels: { 'PL': 'Waluta:', 'EN': 'Currency', 'UK': 'Валюта:' },
            activeCurrency: 0,
            currencyData: [
                {
                    'PL': {
                        currencyName: 'Polski złoty (PLN)',
                        requisites: [
                            { reqTitle: 'Nazwa firmy', reqValue: 'TEOFIPOLSKIE SERCE FUND' },
                            { reqTitle: 'Kod IBAN', reqValue: 'PL61109010140000071219812874' },
                            { reqTitle: 'Nazwa banku', reqValue: 'Bank Millenium' },
                            { reqTitle: 'Kod SWIFT banku', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Adres spółki', reqValue: 'Stawki 2, 00-193 Warszawa, Polska'}
                        ]
                    },
                    'EN': {
                        currencyName: 'Polish zloty (PLN)',
                        requisites: [
                            { reqTitle: 'Company name:', reqValue: 'TEOFIPOLSKIE SERCE FUND' },
                            { reqTitle: 'IBAN code', reqValue: 'PL61109010140000071219812874' },
                            { reqTitle: 'Bank name', reqValue: 'Bank Millenium' },
                            { reqTitle: 'SWIFT code', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Address', reqValue: 'Stawki 2, 00-193 Warsaw, Poland'}
                        ]
                    },
                    'UK': {
                        currencyName: 'Польський злотий (PLN)',
                        requisites: [
                            { reqTitle: 'Назва фірми', reqValue: 'ФУНДАЦІЯ "ЕОФІПОЛЬСЬКЕ СЕРЦЕ"' },
                            { reqTitle: 'Код IBAN', reqValue: 'PL61109010140000071219812874' },
                            { reqTitle: 'Назва банку', reqValue: 'Банк Міленіум' },
                            { reqTitle: 'Код SWIFT банку', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Адреса', reqValue: 'Ставки 2, 00-193 Варшава, Польща'}
                        ]
                    }
                },
                {
                    'PL': {
                        currencyName: 'Hrywna ukraińska (UAH)',
                        requisites: [
                            { reqTitle: 'Nazwa firmy', reqValue: 'TEOFIPOLSKIE SERCE FUND' },
                            { reqTitle: 'Kod IBAN', reqValue: 'UA61109010140000071219812874' },
                            { reqTitle: 'Nazwa banku', reqValue: 'PRIVATBANK' },
                            { reqTitle: 'Kod SWIFT banku', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Adres spółki', reqValue: 'Stawki 2, 00-193 Warszawa, Polska'}
                        ]
                    },
                    'EN': {
                        currencyName: 'Ukrainian hryvna (UAH)',
                        requisites: [
                            { reqTitle: 'Company name:', reqValue: 'TEOFIPOLSKIE SERCE FUND' },
                            { reqTitle: 'IBAN code', reqValue: 'UA61109010140000071219812874' },
                            { reqTitle: 'Bank name', reqValue: 'Bank Millenium' },
                            { reqTitle: 'SWIFT code', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Address', reqValue: 'Stawki 2, 00-193 Warsaw, Poland'}
                        ]
                    },
                    'UK': {
                        currencyName: 'Українська гривня (UAH)',
                        requisites: [
                            { reqTitle: 'Назва фірми', reqValue: 'ФУНДАЦІЯ "ЕОФІПОЛЬСЬКЕ СЕРЦЕ"' },
                            { reqTitle: 'Код IBAN', reqValue: 'UA61109010140000071219812874' },
                            { reqTitle: 'Назва банку', reqValue: 'КБ ПРИВАТБАНК' },
                            { reqTitle: 'Код SWIFT банку', reqValue: 'BNKMLLNNM' },
                            { reqTitle: 'Адреса', reqValue: 'Ставки 2, 00-193 Варшава, Польща'}
                        ]
                    }
                },
            ]
        }
    },

    methods: {

        currencyChange($event) {
            this.activeCurrency = $event.target.selectedIndex;
        }
    }

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
                        font-size: 20px;
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

</style>

