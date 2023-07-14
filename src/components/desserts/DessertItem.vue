<template lang="">
    <div class="soup">
        <div class="inblock">
            <img :src="getImageUrl(dessert.url)" alt="soup">
            <div class="text">
                <p><strong>Название:</strong>{{dessert.title}}</p>
                <p><strong>Описание:</strong>{{dessert.description}}</p>
                <button @click="checkOpen" v-if="isOpen">Скрыть Рецепт</button>
                <button @click="checkOpen" v-else>Посмотреть Рецепт</button>
            </div>
        </div>
        <div v-if="isOpen" class="recept">
            <div class="product">
                <strong>Продукты</strong>
                <div  v-for="product in dessert.products" :key="product">
                    {{product}}
                </div>
            </div>
            <div class="instruction">
                <strong>Рецепт</strong>
                <div v-for="recept in dessert.recept" :key="recept">
                    {{recept}}
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
        <div class="bl"></div>
    </div>
</template>
<script>

export default {
    props:{
        dessert:{
            type: Object
        }
    },
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        getImageUrl(url) {
        return require('@/assets/desserts/' + url); 
        },
        checkOpen(){
            if(this.isOpen){
                this.isOpen = false
            }
            else{
                this.isOpen = true
            }
        }
    },
    
}
</script>
<style src="@/assets/styles/styleItem.scss" lang="scss" scoped>
    
</style>