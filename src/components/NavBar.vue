<template lang="">
    <div v-if="isNav" @click="openNav" class="navbar">
        <img src="../assets/4.svg" alt="">
    </div>
    <div v-else class="buttonNav">
        <div class="close">
            <img @click="closeNav" src="../assets/5.svg" alt="">
        </div>
        <button class="first" @click="$router.push('/')">Главная</button>
        <button @click="$router.push('/soup')">Супы</button>
        <button @click="$router.push('/secondCourse')">Вторые блюда</button>
        <button class="last" @click="$router.push('/dessert')">Десерты</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isNav: true
        }
    },
    methods:{
        openNav(){
            this.isNav = false
        },
        closeNav(){
            this.isNav = true
        }
    }
}
</script>
<style lang="scss" scoped>
    .close{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
        img{
            width: 10%;
            margin: 20px 0;
            cursor: pointer;
        }
    }
    .first{
        border-radius: 20px 20px 0 0 ;
    }
    .last{
        border-radius: 0 0 20px 20px;
    }
    .buttonNav{
        width: 20%;
        background-color: #F60030;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100vh;
        top: 0;
        position: fixed;
       
        button{
            width: 100%;
            padding: 20px 0;
            border: 0px;
            font-size: 25px;
            color: white;
            background-color: #AC011C;
            cursor: pointer;
        }
        button:hover{
            background-color: #2D0001;
        }
    }
    .navbar{
        width: 5%;
        background-color: #F60030;
        color: white;
        display: flex;
        justify-content: center;
        align-items: start;
        margin: 10px;
        position: fixed;
        padding: 25px 0;
        border-radius: 20px;
    }
    .navbar img{
        width: 50%;
        cursor: pointer;
    }
    @media screen and (max-width: 1100px) and (min-width: 600px) {
        .navbar{
            width: 10%;
        }
        .buttonNav{
            width: 45%;
        }
    }
    @media screen and (max-width: 599px){
        .navbar{
            width: 20%;
        }
        .buttonNav{
            width: 65%;
        }
    }
</style>