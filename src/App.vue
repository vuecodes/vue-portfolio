<template>
  <web-header></web-header>
  <router-view/>
  <web-footer></web-footer>
</template>


<script>
  import { onMounted } from 'vue'
  import webHeader from '@/components/webHeader'
  import webMain from '@/components/webMain'
  import webFooter from '@/components/webFooter'
  export default {
    components: {
      webHeader,
      webMain,
      webFooter
    },
    setup () {
      onMounted(() => {
        require('./assets/js/main.js');
        //console.log(GLightbox)
      });
      return {

      }
    }
  }
  </script>

<style lang="scss">
</style>
