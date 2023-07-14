<template lang="">
    <div class="center">
        <soup-item 
        v-for="soup in soups"
        :soup="soup"
        :key="soup.id"
        />
    </div>
</template>
<script>
import SoupItem from '@/components/soup/SoupItem'
export default {
    components:{SoupItem},
    props:{
        soups: {
            type: Array,
        }
    }
}
</script>
<style src="@/assets/styles/styleItem.scss" lang="scss" scoped>
</style>