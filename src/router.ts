import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './road/HomePage.vue';
import More from './road/More.vue';
import How from './road/How.vue';
import Game from './road/Game.vue';
import Edit from './road/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/more',
      name: 'more',
      component: More,
    },
    {
      path: '/how',
      name: 'how',
      component: How,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '/edit/:id',
      name: 'edit',                                       // $route.params.'name'
      component: Edit,
      // props: ,

    },
  ],
});
