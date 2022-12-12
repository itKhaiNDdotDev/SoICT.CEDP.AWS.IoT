<template>
  <div class="container">
    <FixHeader/>
    <fix-sidebar></fix-sidebar>
    <FixContent/>
    <fix-footer></fix-footer>
  </div>
</template>

<script>
import FixHeader from './components/layouts/FixHeader.vue';
import FixSidebar from './components/layouts/FixSidebar.vue'
import FixContent from './components/layouts/FixContent.vue';
import FixFooter from './components/layouts/FixFooter.vue';

export default {
  name: 'App',
  components: {
    FixHeader,
    FixSidebar,
    FixContent,
    FixFooter
  }
}
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 0px;
  }

  .container {
    display: grid;
    grid-template-columns: 192px calc(100% - 192px);
    grid-template-rows: 64px auto 128px;
    height: calc(100vh + 128px);
    box-sizing: border-box;
    background-color: gray;
  }
</style>
