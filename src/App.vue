<template>
  <div id="app">
  	<router-view />
  	<FooterGuider v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>  
import FooterGuider from './components/FooterGuide/FooterGuide.vue'								
  export default {
    data () {
      return {
        
      }
    },
    components: {
    	FooterGuider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.app
	  width: 100%;
	  height: 100%;
	  background: #f5f5f5;
</style>
