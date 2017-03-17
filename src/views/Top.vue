<template>
    <div class="news">
        <div class="load" v-show="loading">
          <loading></loading>
        </div>
        <ul>
           <item v-for="(item, index) in limitItem" :item="item" :index="index+1" :key="item.id"></item>
        </ul> 
        <p v-if="items.length >= limitNum"><a href="#">More</a></p>
     </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import item from '../components/Item.vue'
    import loading from '../components/Loading.vue'

    export default {
      name: 'top',
      components: {
        item,
        loading
      },
      created () {
        const ids = this.$store.state.ids.topids
        this.$nextTick(() => {
          this.$store.dispatch('FETCH_ITEMS', ids).then(() => {
            this.$store.state.loading = true
          })
        })
      },
      computed: {
        ...mapState({
          //  两种方式，字面量方式和函数方式
          items: state => state.items,
          limitNum: 'limitNum',
          loading: 'loading'
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
