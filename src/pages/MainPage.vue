<template lang="">
    <div class="center">
        <div class="into">
            <div v-if="isList" class="txt">
                <p>Не откладывай до ужина то, что можешь съесть за обедом</p>
            </div>
            <div v-if="isList" class="kategoria">
                <p>Выберите категорию еды</p>
                <img @click="openList" src="../assets/2.svg" alt="">
            </div>
            <div v-else class="buttons">
                <p>Выберите категорию еды</p>
                <img @click="closeList" src="../assets/3.svg" alt="">
                <div class="listButtons">
                    <button class="first" @click="$router.push('/soup')">Супы</button>
                    <button @click="$router.push('/secondCourse')">Вторые блюда</button>
                    <button class="last" @click="$router.push('/dessert')">Десерты</button>
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
        background: url('@/assets/1.jpg');
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }
    .into{
        width: 60%;
        background-color: #F60030;
        height: 80%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
    .txt{
        font-size: 50px;
        text-align: center;
        width: 60%;
    }
    .kategoria{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        height: 20%;
        p{
            font-size: 25px;
        }
        img{
            width: 30%;
        }
        img:hover{
            cursor: pointer;
        }
    }
    .buttons{
        width: 80%;
        height: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 10%;
            height: 20%;
            margin: 20px 0;
        }
        p{
            font-size: 25px;
            height: 20%;
        }
        img:hover{
            cursor: pointer;
        }
    }
    .listButtons{
        height: 40%;
        width: 60%;
        text-align: center;
        button{
            width: 100%;
            height: 40%;
            font-size: 25px;
            border: 0px;
            background-color: #AC011C;
            color: white;
        }
        button:hover{
            background-color: #2D0001;
        }
    }
    .first{
        border-radius: 20px 20px 0 0 ;
    }
    .last{
        border-radius: 0 0 20px 20px;
    }
    @media screen and (min-width: 600px) and (max-width: 1000px) {
        .into{
            width: 80%;
        }
        .txt{
            width: 90%;
            font-size: 35px;
        }
        .buttons img{ 
            width: 15%;
        }
        .listButtons{
            width: 80%;
        }
    }
    @media screen and (max-width: 599px){
        .into{
            width: 100%;
        }
        .txt{
            width: 95%;
            font-size: 35px;
        }
        .listButtons{
            width: 100%;
        }
        .buttons{
            width: 90%;
            img{
                width: 20%;
            }
        }
    }
</style>