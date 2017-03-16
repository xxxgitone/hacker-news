<template>
    <div class="login-create">
        <div class="login">
            <h2>LOGIN</h2>
            <p>
                <label for="userName">username: </label>
                <input type="text" name="username" id="userName">
            </p>
            <p>
                <label for="password">password: </label>
                <input type="text" name="password" id="password">
            </p>
            <p><button type="submit">LOGIN</button></p>
        </div>
        <div class="create">
            <h2>Create Account</h2>
            <p>
                <label for="userName">username: </label>
                <input type="text" name="username" id="userName">
            </p>
            <p>
                <label for="password">password: </label>
                <input type="text" name="password" id="password">
            </p>
            <p><button type="submit">create account</button></p>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'login'
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
