<template lang="">
    <div class="center">
        <div class="into">
            <div v-if="isList" class="text">
                <p>Не откладывай до ужина то, что можешь съесть за обедом</p>
            </div>
            <div @click="openList" v-if="isList" class="block">
                <div class="inblock">
                    <img src="@/assets/2.svg" alt="">
                </div>
            </div>
            <div v-else class="openList">
                <div class="list">
                    <img @click="closeList" src="@/assets/3.svg" alt="">
                    <p>Выберите категорию еды</p>
                    <div class="buttons">
                        <button @click="$router.push('/soup')">Супы</button>
                        <button @click="$router.push('/secondCourse')">Вторые блюда</button>
                        <button @click="$router.push('/dessert')">Десерты</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isList: true
        }
    },
    methods:{
        openList(){
            this.isList = false
        },
        closeList(){
            this.isList = true
        }
    }
}
</script>
<style lang="scss" scoped>
    .center{
        background: url('@/assets/1.svg');
        background-attachment: fixed;
        width: 100%;
        height: 90vh;
        
    }
    .into{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .text{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 35px;
        font-weight: bold;
    }
    .text p{
        width: 40%;
        text-align: center;
    }
    .block{
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .inblock{
        background-color: #F60030;
        width: 20%;
        display: flex;
        justify-content: center;
        height: 40%;
        border-radius: 20px 20px 0 0;
        transition: 1s;
    }
    .inblock img{
        width: 25%;
    }
    .inblock:hover{
        transform: translateY(-20px);
        transition: 1s;
        border-radius: 20px;
    }
    .openList{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .list{
        background-color: #F60030;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 70%;
        width: 60%;
        font-size: 30px;
        color: white;
        border-radius: 20px 20px 0 0;
    }
    .buttons{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        button{
            height: 30%;
            font-size: 25px;
            border: 0px;
            background-color: #AC011C;
            color: white;
        }
        button:hover{
            background-color: #2D0001;
        }
    }
    .list img{
        width: 10%;
        transition: 1s;
    }
    .list img:hover{
        transform: translateY(20px);
        transition: 1s;
    }
    @media screen and (min-width: 600px) and (max-width: 900px) {
        .text p{
            width: 70%;
        }
        .inblock{
            width: 30%;
        }
        .list{
            width: 80%;
        }
    }
    @media screen and (max-width: 599px){
        .text p{
            width: 85%;
            font-size: 30px;
        }
        .inblock{
            width: 45%;
        }
        .list{
            width: 100%;
            p{
                font-size: 25px;
                text-align: center;
            }
        }
        .buttons button{
            font-size: 25px;
        }
    }
</style>