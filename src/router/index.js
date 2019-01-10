import Vue from 'vue';
import Router from 'vue-router';

const Answer = () => import('@/components/answer/Answer');
const Home = () => import('@/components/home/Home');
const Hot = () => import('@/components/hot/Hot');
const Article = () => import('@/components/article/Article');
const ArticleDetail = () => import('@/components/article/ArticleDetail');
const Login = () => import('@/components/login/Login');
const Register = () => import('@/components/login/Register');
const LoginModule = () => import('@/components/login/LoginModule');
const AnswerQuestionDetail = () => import('@/components/answer/AnswerQuestionsDetail.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginModule',
      component: LoginModule,
      children: [
        {
          path: '/',
          name: 'login',
          component: Login,
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Home',
          component: Hot
        },
        {
          path: '/home/answer',
          name: 'Answer',
          component: Answer
        },
        {
          path: '/home/answer/:id',
          name: 'AnswerDetail',
          component: AnswerQuestionDetail
        },
        {
          path: '/home/article',
          name: 'Article',
          component: Article,
        },
        {
          path: "/home/article/:_id",
          name: 'ArticleDetail',
          component: ArticleDetail
        },
        {
          path: '/home/hot',
          name: 'Hot',
          component: Hot
        }        
      ]
    }
  ]
})
