<template lang="">
    <div class="soup">
        <div class="inblock">
            <img :src="getImageUrl(soup.url)" alt="soup">
            <div class="text">
                <p><strong>Название:</strong>{{soup.title}}</p>
                <p><strong>Описание:</strong>{{soup.description}}</p>
                <button @click="checkOpen" v-if="isOpen">Скрыть Рецепт</button>
                <button @click="checkOpen" v-else>Посмотреть Рецепт</button>
            </div>
        </div>
        <div v-if="isOpen" class="recept">
            <div class="product">
                <strong>Продукты</strong>
                <div  v-for="product in soup.products" :key="product">
                    {{product}}
                </div>
            </div>
            <div class="instruction">
                <strong>Рецепт</strong>
                <div v-for="recept in soup.recept" :key="recept">
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
        soup:{
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
        return require('@/assets/soupsimg/' + url); // Используйте функцию require для загрузки изображения
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