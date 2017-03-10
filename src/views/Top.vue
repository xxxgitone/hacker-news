<template>
    <div class="news">
        <ul>
            <li class="new-item" v-for="(item, index) in limitItem">
                <div class="new-title">
                    <span class="indexNum">{{ index+=1 }}.</span>
                    <span class="vote" @click="voted(item)"></span>
                    <span class="title">
                        <a :href="item.url" class="url" target="_black">{{ item.title }}</a>
                        <span>(<a href="#">{{ item.type }}</a>)</span>
                    </span>
                </div>
                <span class="meta">
                    <span>{{ item.score }}</span> points by
                    <span><a href="#">{{ item.by }}</a></span>
                    <span class="timeago">
                        <a href="">{{ item.time | timeAgo }}</a>
                    </span>
                    <span><a href="#">unvote</a></span>
                    <span @click="hideItem(item)"><a href="#">hide</a></span>
                    <span><a href="#">{{ item.kids.length }} comments</a></span>
                </span>
            </li>
        </ul> 
        <p v-if="items.length >= limitNum"><a href="#">More</a></p>
     </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
      name: 'top',
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
      },
      methods: {
        voted (item) {
          this.$store.commit('UPDATE_VOTED', item.id)
        },
        hideItem (item) {
          this.$store.commit('HIDE_ITEM', item)
        }
      }
    }
</script>

<style lang="scss">
    .news {
        width: 100%;
        font-size: 0.9rem;
        background: white;
    }
    .new-item {
        width: 100%;
        margin-bottom: 0.5em;
        color: #9a9a9a;
        background: #f6f6ef;
        padding: 10px;

        a {
            color: #9a9a9a;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    .new-title {
        display: flex;
        margin: 0 0 0.3em 0;
        .vote {
            display: block;
            width: 0;
            height: 0;
            overflow: hidden;
            border: 0.45em solid transparent;
            border-bottom-color: #9a9a9a;
            margin: 0 0.5em;
            cursor: pointer;
        }

        .url {
            color:black;
            font-size: 1em;
        }
    }

    .meta {
        padding: 0 0 0 1.6em;
        display: flex;

        span {
            display: block;
            padding: 0 2px;
        }
        span:nth-child(4) {
            margin: 0 0 0 2px;
        }
        span:nth-child(4), span:nth-child(5), span:nth-child(6) {
            padding: 0 6px;
            display: block;
            border-left: 1px solid #9a9a9a;
        }
    }
</style>
