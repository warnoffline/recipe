<template lang="">
    <div class="back">
        <second-list
        :seconds="seconds" 
        />
    </div>
</template>
<script>
import axios from 'axios'
import SecondList from '@/components/second/SecondList.vue'
export default {
    components:{
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
    background: url('@/assets/1.svg');
    min-height: 90vh;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
}
</style>