<template>
    <div class="login-create">
        <form class="login" @submit.prevent="login">
            <h2>LOGIN</h2>
            <p>
                <label for="userName">username: </label>
                <input type="text" name="username" id="userName" >
            </p>
            <p>
                <label for="password">password: </label>
                <input type="password" name="password" id="password">
            </p>
            <p><button>LOGIN</button></p>
        </form>
        <form class="create" @submit.prevent="submitInfo">
            <h2>Create Account</h2>
            <p>
                <label for="userName">username: </label>
                <input type="text" name="username" id="userName" v-model="username">
            </p>
            <p>
                <label for="password">password: </label>
                <input type="password" name="password" id="password" v-model="password">
            </p>
            <p><button>create account</button></p>
        </form>
    </div>
</template>

<script>
    export default {
      name: 'login',
      computed: {
        username: {
          get () {
            return this.$store.state.loginUser.id
          },
          set (value) {
            this.$store.commit('UPDATE_USERNAME', value)
          }
        },
        password: {
          get () {
            return this.$store.state.loginUser.password
          },
          set (value) {
            this.$store.commit('UPDATE_PASSWORD', value)
          }
        }
      },
      methods: {
        submitInfo () {
          this.$store.commit('CREATED_ACCOUNT')
          this.$router.push({
            path: '/news'
          })
        },
        login () {
          this.$store.dispatch('LOGIN_ACCOUNT').then(() => {
            this.$router.push({
              path: '/news'
            })
          })
        }
      }
    }
</script>

<style lang="scss">
    .login-create {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .login, .create{
            flex: 1 1 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            p {
                margin-top: 1em;
            }
        }


    }
    

</style>
