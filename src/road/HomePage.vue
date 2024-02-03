<template>
  <div class="homepage">
    <HelloWorld/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import store from '../store/store';

@Component({
  components: {
    HelloWorld,
  },
})

export default class HomePage extends Vue {}


</script>
