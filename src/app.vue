<template>
  <div id="app">
    <div class="bg-mask"></div>
    <todo-header></todo-header>
    <todo-body></todo-body>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import todoHeader from './todo/header.vue'
import todoBody from './todo/todo.vue'
import todoFooter from './todo/footer.vue'

export default {

  name: 'app',

  data () {
    return {

    }
  },

  components: {
    todoHeader,
    todoBody,
    todoFooter,
  }
}
</script>

<style lang="stylus" scoped>
#app
  position absolute
  top 0
  left 0
  right 0
  bottom 0

.bg-mask
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  bottom 0
  right 0
  opacity 0.2
  z-index -1
  background-color #f3f8f1
</style>