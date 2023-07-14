<template lang="">
    <div class="back">
        <soup-list
        :soups="soups" 
        />
    </div>
</template>
<script>
import axios from 'axios'
import SoupList from '@/components/soup/SoupList.vue'
export default {
    components:{
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
    min-height: 90vh;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
}
</style>