<template lang="">
    <div class="root">
        <NavBar></NavBar>
        <div class="back">
            <soup-list
            :soups="soups" 
            />
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
import SoupList from '@/components/soup/SoupList.vue'
export default {
    components:{
        NavBar,
        SoupList
    },
    data(){
        return{
            soups: []
        }
    },
    methods:{
        async fetchSoups(){
            try{
                const response = await axios.get('/json/soups.json')
                this.soups = response.data
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
    min-height: 100vh;
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