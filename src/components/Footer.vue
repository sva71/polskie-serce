<template>

    <div class="footer" id="footer">
        <div class="logo-mono"></div>
        <div class="footer-info">
            <p>{{ phone }}</p>
            <p>{{ email }}</p>
            <p>{{ address[lang] }}</p>
        </div>
        <div class="footer-icons">
            <div class="footer-icons-insta" @click="redirect(instaLink)" title="Instagram">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z" fill="white"/>
                    <g clip-path="url(#clip0_216_707)">
                        <path d="M15.0027 11.9675C13.2992 11.9675 11.9251 13.3201 11.9251 14.9971C11.9251 16.674 13.2992 18.0267 15.0027 18.0267C16.7063 18.0267 18.0804 16.674 18.0804 14.9971C18.0804 13.3201 16.7063 11.9675 15.0027 11.9675ZM15.0027 16.9667C13.9018 16.9667 13.0018 16.0834 13.0018 14.9971C13.0018 13.9108 13.8992 13.0275 15.0027 13.0275C16.1063 13.0275 17.0036 13.9108 17.0036 14.9971C17.0036 16.0834 16.1036 16.9667 15.0027 16.9667ZM18.9242 11.8436C18.9242 12.2364 18.6027 12.5502 18.2063 12.5502C17.8072 12.5502 17.4884 12.2338 17.4884 11.8436C17.4884 11.4533 17.8099 11.1369 18.2063 11.1369C18.6027 11.1369 18.9242 11.4533 18.9242 11.8436ZM20.9626 12.5608C20.917 11.6142 20.6974 10.7757 19.9929 10.0849C19.2911 9.39407 18.4393 9.17786 17.4777 9.1304C16.4867 9.07502 13.5161 9.07502 12.5251 9.1304C11.5661 9.17522 10.7143 9.39143 10.0099 10.0823C9.30541 10.7731 9.08845 11.6115 9.04023 12.5581C8.98398 13.5337 8.98398 16.4578 9.04023 17.4334C9.08577 18.38 9.30541 19.2185 10.0099 19.9093C10.7143 20.6001 11.5634 20.8163 12.5251 20.8638C13.5161 20.9192 16.4867 20.9192 17.4777 20.8638C18.4393 20.819 19.2911 20.6028 19.9929 19.9093C20.6947 19.2185 20.9143 18.38 20.9626 17.4334C21.0188 16.4578 21.0188 13.5364 20.9626 12.5608ZM19.6822 18.4802C19.4733 18.997 19.0688 19.3951 18.5411 19.6034C17.7509 19.9119 15.8759 19.8407 15.0027 19.8407C14.1295 19.8407 12.2518 19.9093 11.4643 19.6034C10.9393 19.3978 10.5349 18.9996 10.3233 18.4802C10.0099 17.7024 10.0822 15.8567 10.0822 14.9971C10.0822 14.1375 10.0126 12.2892 10.3233 11.514C10.5322 10.9972 10.9367 10.599 11.4643 10.3907C12.2545 10.0823 14.1295 10.1534 15.0027 10.1534C15.8759 10.1534 17.7536 10.0849 18.5411 10.3907C19.0661 10.5964 19.4706 10.9946 19.6822 11.514C19.9956 12.2918 19.9233 14.1375 19.9233 14.9971C19.9233 15.8567 19.9956 17.705 19.6822 18.4802Z" fill="#8098D5"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_216_707">
                            <rect width="12" height="13.5" fill="white" transform="translate(9 8.25)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="footer-icons-linkedin" @click="redirect(linkedinLink)" title="LinkedIn">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z" fill="white"/>
                    <g clip-path="url(#clip0_216_708)">
                        <path d="M11.2006 20.6257H8.46774V11.863H11.2006V20.6257ZM9.8327 10.6677C8.95882 10.6677 8.25 9.94697 8.25 9.07686C8.25 8.65891 8.41675 8.25808 8.71356 7.96254C9.01038 7.66701 9.41294 7.50098 9.8327 7.50098C10.2525 7.50098 10.655 7.66701 10.9518 7.96254C11.2487 8.25808 11.4154 8.65891 11.4154 9.07686C11.4154 9.94697 10.7063 10.6677 9.8327 10.6677ZM21.4289 20.6257H18.7019V16.3601C18.7019 15.3435 18.6813 14.0397 17.281 14.0397C15.8601 14.0397 15.6424 15.1442 15.6424 16.2868V20.6257H12.9125V11.863H15.5335V13.0583H15.5718C15.9366 12.3698 16.8279 11.6433 18.1575 11.6433C20.9234 11.6433 21.4318 13.4567 21.4318 15.8122V20.6257H21.4289Z" fill="#8098D5"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_216_708">
                            <rect width="13.1818" height="15" fill="white" transform="translate(8.25 7.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="footer-icons-facebook" @click="redirect(facebookLink)" title="Facebook">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z" fill="white"/>
                    <g clip-path="url(#clip0_216_709)">
                        <path d="M18.3516 16.2656L18.7515 13.6867H16.2509V12.0132C16.2509 11.3076 16.6002 10.6199 17.7202 10.6199H18.857V8.42423C18.857 8.42423 17.8253 8.25 16.839 8.25C14.7797 8.25 13.4336 9.48519 13.4336 11.7212V13.6867H11.1445V16.2656H13.4336V22.5H16.2509V16.2656H18.3516Z" fill="#8098D5"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_216_709">
                            <rect width="9" height="14.25" fill="white" transform="translate(10.5 8.25)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </div>

</template>


<script>

export default {

    name: "Footer",

    props: {
        lang: String
    },

    data() {
        return {
            phone: '+48 605 738 667',
            email: 'office@teserce.pl',
            address: {
                'PL': 'Stawki 2, 00-193 Warszawa, Polska',
                'EN': 'Stawki 2, 00-193, Warsaw, Poland',
                'UK': 'Ставки 2, 00-193, Варшава, Польща'
            },
            instaLink: 'https://www.instagram.com/teofipolskie_serce/',
            linkedinLink: 'https://www.linkedin.com/company/teoserce/',
            facebookLink: 'https://www.facebook.com/teofipolskieserce/'
        }
    },

    methods: {

        redirect(link) {
            window.open(link, '_blank');
        }

    }

}


</script>

<style scoped lang="scss">

.footer {
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 128px;
    background-color: #8098D5;
    @media (max-width: 700px) {
        height: auto;
        padding: 10px;
    }
    &-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        p {
            margin-left: 30px;
            font-size: 16px;
            color: white;
        }
    }
    &-icons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        &-insta, &-linkedin, &-facebook {
            margin-left: 30px;
            cursor: pointer;
        }
    }
}

.logo-mono {
    width: 116px;
    height: 24px;
    background: url("../assets/img/logo-mono.svg");
}

</style>
