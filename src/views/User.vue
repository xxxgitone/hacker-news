<template>
    <div class="user">
        <p><span>user:</span><span>{{ user.id }}</span></p>
        <p><span>created:</span><span>{{ user.created | timeAgo }}</span></p>
        <p><span>karma:</span><span>{{ user.karma }}</span></p>
        <p><span>about:</span><span><a href="">submitted</a></span></p>        
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      name: 'user',
      created () {
        this.fetchUser()
      },
      watch: {
        //  监听路由变化，及时更新数据，
        //  这个页面没有处理加载过程，如果数据获取过慢，在渲染数据时会出现user为undefined
        '$route': 'fetchUser'
      },
      computed: {
        ...mapState({
          user: 'user'
        })
      },
      methods: {
        fetchUser () {
          const id = this.$route.params.id
          this.$store.commit('FETCH_USER', id)
        }
      }
    }
</script>

<style lang="scss">
    .user {
        width: 100%;
        background: #f6f6ef;
    }

    p {
        height: 2em;
        line-height: 2em;
        padding-left: 1em;
        display: flex;

        span:nth-child(1) {
            flex-basis: 4em;
        }
    }
</style>
