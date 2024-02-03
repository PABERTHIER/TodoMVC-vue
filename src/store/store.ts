import Vue from 'vue';
import Vuex from 'vuex';
import { State, Todo, Time } from './types';
import { start } from 'repl';

Vue.use(Vuex);
let interval: any;
const serializedState = localStorage.getItem('vue_state');

export default new Vuex.Store({
  modules: {
  },
  state: {
    todos: [] as Todo[],    //
    message: '',
    checked: false,
    title: 'Todos :' ,
    description: '' ,
    completed: false ,
    show: true ,
    items: 0 ,
    supp: 0 ,
    name: '',               //
    heure: 0,               //
    minute: 0 ,             //
    seconde: 0 ,             //
    time: [] as Time[],
    clear: 0,
    secretnumber: 0 ,
    yournumber: 0 ,
    attempt: 1 ,
    id: 0,
    strsec: 'Congratulations, you guessed the secret number ',
  },
  mutations: {
    ADDNEW(state, description: string) {
        state.todos.push({
          description,
          completed: false,
          id: state.id,
        });
        state.id ++;
    },
    /*EDITODO(state, model: {todo: Todo, description: string}) {
      const todos = state.todos;
      todos.splice(todos.indexOf(model.todo), 1);
      state.todos = todos;
      state.message = model.todo.description;
    },*/
    CHECKALL(state, checked: boolean) {
      state.checked = checked;
      state.todos.forEach((x) => x.completed = checked);
    },
    CHECKTODO(state, model: {todo: Todo, completed: boolean}) {
      state.todos.forEach((element) => {
        if (element === model.todo) {
          element.completed = model.completed;
        }
      });

      if (state.todos.filter((x) => x.completed === false).length === 0 ) {
        state.checked = true;
      }  else {
        state.checked = false;
      }
    },
    DELETECOMPLETED(state) {
      for ( let i = state.todos.length - 1; i >= 0; i-- ) {
        if ( state.todos[i].completed === true ) {
          state.todos.splice(i, 1);
        }
        state.checked =  false;
      }
    },
    DELETEBUTTON(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);

    },
    STARTSTOP(state, time: {second: number, minute: number, hour: number }) {
      state.seconde = time.second;
      state.minute = time.minute;
      state.heure = time.hour;
    },
    PLAY(state) {
      state.secretnumber = Math.floor(Math.random() * 50) + 1;

      do {
        state.yournumber = Number(prompt('Choose a number between 1 and 50 included:'));
        if (state.yournumber === state.secretnumber) {
            alert(state.strsec + state.secretnumber + ' in ' + state.attempt + ' attempts !');
        } else {
            if (state.yournumber < state.secretnumber) {
                alert('The secret number is higher than ' + state.yournumber);
            } else {
                alert('The secret number is lower than ' + state.yournumber);
            }
        }
        state.attempt += 1 ;
    }while (state.yournumber !== state.secretnumber);
      state.attempt = 0;
    },
  },
  actions: {
    startStop({commit}) {
      let second = 0;
      let minute = 0;
      let hour = 0;

      interval = setInterval(() => {
        if (second === 59) {
          second = 0 ;
          if (minute === 59) {
            minute = 0 ; hour++ ;
          } else {
            minute++ ;
          }
        } else {
          second++ ;
        }
        commit('STARTSTOP', {second, minute, hour});
      }, 1000);
    },
    stop({commit}) {
      clearInterval(interval);
      commit('STARTSTOP', {second: 0, minute: 0, hour: 0});
    },
  },
  getters: {
  },
});
