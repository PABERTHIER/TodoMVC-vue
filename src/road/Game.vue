<template>
  <div class="game">
      <h1>Do you want to play the game of the more or less ? </h1>
      <button @click="play()">Play</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import store from '../store/store';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Game extends Vue {

    public play() {
        store.commit('PLAY');
    }
}
</script>

<style>
h1{
  text-align: center;
  font-size: 30px;
  color: #EBD7D7;
}
</style>