<template lang="">
    <div class="soup">
        <div class="inblock">
            <img :src="getImageUrl(second.url)" alt="soup">
            <div class="text">
                <p><strong>Название:</strong>{{second.title}}</p>
                <p><strong>Описание:</strong>{{second.description}}</p>
                <button @click="checkOpen" v-if="isOpen">Скрыть Рецепт</button>
                <button @click="checkOpen" v-else>Посмотреть Рецепт</button>
            </div>
        </div>
        <div v-if="isOpen" class="recept">
            <div class="product">
                <strong>Продукты</strong>
                <div  v-for="product in second.products" :key="product">
                    {{product}}
                </div>
            </div>
            <div class="instruction">
                <strong>Рецепт</strong>
                <div v-for="recept in second.recept" :key="recept">
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
        second:{
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
        return require('@/assets/secondsimg/' + url); 
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