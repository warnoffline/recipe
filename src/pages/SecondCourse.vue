<template lang="">
    <div class="root">
    <NavBar></NavBar>
    <div class="back">
        <second-list
        :seconds="seconds" 
        />
    </div>
</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
import SecondList from '@/components/second/SecondList.vue'
export default {
    components:{
        NavBar,
        SecondList
    },
    data(){
        return{
            seconds: []
        }
    },
    methods:{
        async fetchSoups(){
            try{
                const response = await axios.get('/json/second.json')
                this.seconds = response.data
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