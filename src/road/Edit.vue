<template>
  <div class="edit">
    <h1>Edit</h1>
    <input v-model="newmessage"  @keyup.enter="addNewEdit(newmessage)" @keyup.escape="home()">
    <p> {{this.$store.state.todos.id}}</p>
  </div>  <!--placeholder=this.todo.description-->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { Todo, State, Time } from '../store/types';
import store from '../store/store';
import router from '../router';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

@Component({
  components: {
    HelloWorld,
    props: {

    }
  },
})

export default class Edit extends Vue {
  public newmessage: string = '';


  public addNewEdit(newmessage: string) {
    this.$store.state.todos.id = this.newmessage;
    this.newmessage = '';

  }

    public home() {
        router.push({ path: '/'});
    }
}


</script>