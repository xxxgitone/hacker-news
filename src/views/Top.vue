<template>
    <div class="news">
        <ul>
           <item v-for="(item, index) in limitItem" :item="item" :index="index+1"></item>
        </ul> 
        <p v-if="items.length >= limitNum"><a href="#">More</a></p>
     </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import item from '../components/Item.vue'

    export default {
      name: 'top',
      components: {
        item
      },
      created () {
        const ids = this.$store.state.ids.topids
        this.$nextTick(() => {
          this.$store.commit('FETCH_ITEMS', ids)
        })
      },
      computed: {
        ...mapState({
          items: 'items',
          limitNum: 'limitNum'
        }),
        ...mapGetters({
          limitItem: 'limitItem'
        })
      }
    }
</script>

<style lang="scss">
    .news {
        width: 100%;
        font-size: 0.9rem;
        background: white;
    }
</style>
