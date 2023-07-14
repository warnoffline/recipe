<template lang="">
    <div class="navbar">
        <a href="/">
            <img src="../assets/0.svg" alt="logo">
            <p>Главная</p>
        </a>
        <p>Рецепты для каждого</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .navbar{
        background-color: #AC011C;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 10vh;
    }
    .navbar a img{
        width: 50%;
    }
    .navbar a{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: white;
    }
    .navbar a p{
        font-size: 25px;
        
    }
    .navbar a:hover{
        color: black;
    }
    .navbar p{
        text-align: center;
        font-size: 30px;
    }
    @media screen and (max-width: 599px){
        .navbar a p{
            font-size: 20px;
        }
        .navbar p{
            font-size: 20px;
        }
    }
</style>