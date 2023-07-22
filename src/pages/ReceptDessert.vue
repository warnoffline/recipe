<template lang="">
    <div class="root">
    <NavBar></NavBar>
    <div class="back">
        <dessert-list
        :desserts="desserts" 
        />
    </div>
</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
import DessertList from '@/components/desserts/DessertList.vue'
export default {
    components:{
        NavBar,
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
    width: 100%;
}
.root{
    width: 100%;
    display: flex;
    flex-direction: row;
}
</style>