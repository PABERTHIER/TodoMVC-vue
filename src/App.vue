<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'homepage'}">Todo Home</router-link> |
      <router-link :to="{name: 'how'}">How</router-link> |
      <router-link :to="{name: 'game'}">Game</router-link> |
      <router-link :to="{name: 'more'}">More</router-link> 
      
    </div>
    <router-view/>
    <div id="footer">
          Todo created since:
          <span>{{ $store.state.heure }}</span> hour(s)
          <span>{{ $store.state.minute }}</span> minute(s)
          <span>{{ $store.state.seconde }}</span> second(s)
          <a href="#" class="button" @click="timer += 1, heyTimer()"></a>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store/store';

@Component
export default class App extends Vue {
public timer: number = 0;

  public mounted() {
      store.dispatch('startStop');
    }

    public heyTimer() {
    if (this.timer % 2 === 0 && this.timer !== 0) {
      store.dispatch('startStop');
    } else {
      store.dispatch('stop');
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



#footer{
  position: absolute;
  left: 550px;
}


.button{
  display: inline-block;
  width: 65px;
  height: 18px;
  border-radius: 30px;
  background: linear-gradient(90eg,red ,cyan);
  box-shadow:
    1px 6px 7px rgba(0, 0, 0, 0.5),
    0 0 5px rgba(0, 0, 0, 0.4);
  position: relative;
  top: 5px;
  left: 6px;
  z-index: 99;
}

.button:before{
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(45deg,white , black);
  position: absolute;
  top: 1px;
  right: 10px;
}

.button:hover{
  border-bottom: none;
  top: 6px;
  box-shadow:
    1px 4px 7px rgba(0, 0, 0, 0.5),
    0 0 3px rgba(0, 0, 0, 0.4);
}

.button:active{
  left: 25px;
  transition: all 0.1s ease-in-out;
}

</style>
