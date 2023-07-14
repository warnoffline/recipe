<template lang="">
    <div class="back">
        <dessert-list
        :desserts="desserts" 
        />
    </div>
</template>
<script>
import axios from 'axios'
import DessertList from '@/components/desserts/DessertList.vue'
export default {
    components:{
        DessertList
    },
    data(){
        return{
            desserts: []
        }
    },
    methods:{
        async fetchSoups(){
            try{
                const response = await axios.get('/json/dessets.json')
                this.desserts = response.data
            }catch(e){
                console.log(e)
            }
        }
        
    },
    mounted(){
        this.fetchSoups()
    }
}
</script>
<style lang="scss" scoped>
.back{
    background: url('@/assets/1.jpg');
    min-height: 90vh;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
}
</style>