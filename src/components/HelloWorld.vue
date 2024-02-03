<template>
<div>
<h2>{{ $store.state.name + $store.state.title }}</h2>
    <div id="ovale">
     <span v-if="todos.length >= 1">
        <input type="checkbox" id="checkbox" :checked="isToggleChecked" @click.prevent="toggleCheckbox()" />
     </span>                                   
      <input v-model="message" placeholder="What needs to be done"
        id="new-todo"  @keyup.enter="addTodo()"></div>
      <p v-if="filteredTodos.length">
        <ul v-for="todo in filteredTodos" :key="todo.id">
          <ul v-if = "todo.completed === false">
            <input type="checkbox" id="checkbox2" :checked="todo.completed" @click.prevent="checkTodo(todo)">
            <label @dblclick ="editTodo(todo.id, todo.description)" ><span>{{ todo.description }} </span></label><button id="sup" @click="deleteButton(todo)"></button>
            </ul>
          <ul v-else>
            <input type="checkbox" id="checkbox2" :checked="todo.completed" @click.prevent="checkTodo(todo)">
            <label @dblclick ="editTodo(todo.id, todo.description)"><span id="line">{{ todo.description }} </span></label><button id="sup" @click="deleteButton(todo)"></button></ul>
            
        </ul>
      </p>
      <p v-else> There are no todos yet</p>
        <br>
        {{nbrOfItems}} item(s) left

        <button @click="activeFilter = 0">All</button>
        <button @click="activeFilter = 1">Active</button>
        <button @click="activeFilter = 2">Completed</button>

        <br><br>
        <button @click.prevent="deleteCompleted()" v-show="todos.length">Clear completed</button>

        <br>
        <p class="name" > 
          <button @click.prevent ="Name()">Name</button>
        </p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import App from './App.vue';
import store from '../store/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import Vuex, { StoreOptions, Module, MutationTree, ActionTree, GetterTree, Store, ActionContext } from 'vuex';
import { Todo, State, Time } from '../store/types';
import { mapGetters, mapActions } from 'vuex';
import router from '../router';
// import VueLocalStorage from 'vue-localstorage';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

@Component
export default class HelloWorld extends Vue {
  public message: string = '';
  public activeFilter: number = 0;

  public addTodo() {
    store.commit('ADDNEW', this.message);
    this.message = '';
  }

  public checkTodo(todo: Todo) {
    store.commit('CHECKTODO', {todo, completed: !todo.completed});
  }
  public editTodo(id: Todo, description: Todo) {   /*prendre en paramètre l'id du todo*/
    const userId = id ;
    
    router.push({ path: `/edit/${userId}`});
  }

  public toggleCheckbox() {
    store.commit('CHECKALL', !store.state.checked);
  }

  public deleteCompleted() {
    store.commit('DELETECOMPLETED');
  }

  public deleteButton(todo: Todo) {
    store.commit('DELETEBUTTON', todo);
  }



   get filteredTodos(): Todo[] {
      if (this.activeFilter === 0) {
        return store.state.todos ;
      } else if (this.activeFilter === 1) {
        return store.state.todos.filter((x) => x.completed === false);
      } else {
        return store.state.todos.filter((x) => x.completed === true);
      }
    }

  get nbrOfItems(): number {
    return store.state.todos.filter((x) => x.completed === false).length;
  }

  get isToggleChecked() {
    return store.state.checked;
  }

  get todos() {
    return store.state.todos;
  }

  get Name() {
    store.state.name = String(prompt('Entrer votre nom')) ;
    store.state.name = store.state.name + '\'\s ';
    return store.state.name;
  }


}
</script>

<style>
html{
  background: linear-gradient(45deg, cyan,red) center fixed no-repeat;
  height: 100%;

}


h2{
  text-align: center;
  font-size: 50px;
  color: #EBD7D7;
}
button{
  border-radius: 5px;
}
#line{
  text-decoration: line-through;
  color:red;                                        
  opacity:1;
  font-weight: bold;
}

#new-todo{
  width: 210px;
  border-style: solid;
  border-width: 1px;
  border-color: #dddddd; 
  padding: 20px 20px 20px 20px;

}
.center{
  display: table;
  text-align: center;
  
}
.name{
  margin-left: 400px;
}
#checkbox{
  width: 35px;
}

#checkbox2{
  width: 35px;
}

#ovale {
  margin-left: auto;
  margin-right: auto;
	width: 350px;
	background: rgb(233,233,233);
	border-top-left-radius: 50px 50px;
	border-top-right-radius: 50px 50px;
	border-bottom-right-radius: 50px 50px;
	border-bottom-left-radius: 50px 50px;
}
#sup:before{
  content: "\00274C";
}


</style>