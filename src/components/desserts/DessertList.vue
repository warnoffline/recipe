<template lang="">
    <div class="center">
        <dessert-item 
        v-for="dessert in desserts"
        :dessert="dessert"
        :key="dessert.id"
        />
    </div>
</template>
<script>
import DessertItem from '@/components/desserts/DessertItem'
export default {
    components:{DessertItem},
    props:{
        desserts: {
            type: Array,
        }
    }
}
</script>
<style src="@/assets/styles/styleItem.scss" lang="scss" scoped>
    
</style>