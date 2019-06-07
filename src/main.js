// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
	el: '#app',
	render: h => h(App),
	// 1、多了 router-link ,router-view 2、$router、 $route
	router
})