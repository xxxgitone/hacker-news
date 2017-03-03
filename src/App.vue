<template>
  <div id="app">
    <div class="slideBar">
      <header class="logo">
        <img src="https://news.ycombinator.com/favicon.ico" alt="Hacker News">
        <h1>Hacker News</h1>
      </header>
      <nav class="nav">
          <ul>
              <li><i>R</i><a href="#">NEW</a></li>
              <li><i>R</i><a href="#">COMMENTS</a></li>
              <li><i>R</i><a href="#">SHOW</a></li>
              <li><i>R</i><a href="#">ASK</a></li>
              <li><i>R</i><a href="#">JOBS</a></li>
              <li><i>R</i><a href="#">SUBMIT</a></li>
              <li><i>R</i><a href="#">COMMENTS</a></li>
              <li><i>R</i><a href="#">COMMENTS</a></li>               
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

#app {
  width: 75rem;
  height: 38rem;
  border: 1px solid red;
  font-size: 1rem;
}

.slideBar {
    width: 20%;
    height: 100%;
    background:white;
    display: flex;
    flex-wrap: wrap;
}

header.logo {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;

  img {
    width: 15%;
    height: 30%;
    border-radius: 50%;
  }

  h1 {
    width: 30%;
    width: 65%;
    font-size: 1.25rem;
    text-align: center;
  }
}

nav.nav {

}



</style>
