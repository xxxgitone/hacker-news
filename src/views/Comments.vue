<template>
    <div class="comments">
      <item :item="item" :key="item.id"></item>
      <div class="add-comment">
         <textarea name="comment" cols="70" rows="7"></textarea>
         <button type="submit">Add Comment</button>
      </div>

      <div class="kid-comment">
        <div class="comment-details">
          <div class="title">1.fhjksahfkjfdhfkjdfhsdkf fhsdkfh </div>
          <p>fdsgksdhg</p>
        </div>
      </div>
      
    </div>
</template>

<script>
    import item from '../components/Item.vue'
    export default {
      name: 'comment',
      components: {
        item
      },
      computed: {
        item () {
          //  string类型,item.id为number类型
          const id = Number(this.$route.params.id)
          const item = this.$store.state.items.find(item => item.id === id)
          return item
        }
      }
    }
</script>

<style lang="scss">
    $bgColor:#f6f6ef;
    $fontColor:#9a9a9a;

    .comments {
      width: 100%;
      background: $bgColor;
      font-size: 1rem;
      overflow-y: scorll;
    }

    .add-comment {
      width:100%;
      display: flex;
      flex-direction: column;

      textarea {
        margin: 0 0 1em 2em;
        width: 70%;
        color: $fontColor;
      }

      button {
        flex-basis: 100%;
        width:8em;
        margin: 0 0 1em 2em;
      }
    }

    .kid-comment {
      width: 100%;
      margin: 1.5em 0 0 1em;
    }

    .comment-details {
        padding: 0.5em 0 0 1em;
        display: flex;
        flex-wrap: wrap;

        .title {
          color: $fontColor;
          flex-basis: 100%;
        }

        .comment-text {
          width: 50px;
          height: 500px;
          white-space:normal
        }
    }
</style>
