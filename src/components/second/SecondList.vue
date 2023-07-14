<template lang="">
    <div class="center">
        <second-item 
        v-for="second in seconds"
        :second="second"
        :key="second.id"
        />
    </div>
</template>
<script>
import SecondItem from '@/components/second/SecondItem'
export default {
    components:{SecondItem},
    props:{
        seconds: {
            type: Array,
        }
    }
}
</script>
<style src="@/assets/styles/styleItem.scss" lang="scss" scoped>
    
</style>