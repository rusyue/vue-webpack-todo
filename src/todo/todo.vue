<template>
  <section class="main-body">
    <div class="todo-input">
      <input
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下来要做什么？"
        v-model="newTodoText"
        @keyup.enter="addNewTodo"
      />
    </div>

    <div class="todo-list">
      <todo-items
        v-for="todo in todos"
        :todo="todo"
      ></todo-items>
    </div>

    <div class="todo-tabs">
      <todo-tabs></todo-tabs>
    </div>
  </section>
</template>

<script>
import todoItems from './items.vue'
import todoTabs from './tabs.vue'


export default {

  name: 'todo',

  data () {
    return {
      todos: [
        { id: 0, text: '我一警告某种水平可惜' },
        { id: 1, text: '双手犹豫采用痛苦差距' },
        { id: 2, text: '一本某种对着一大权益' },
        { id: 3, text: '白色作为之中执行时间' },
      ],
      newTodoText: ''
    }
  },

  computed: {
    newTodoId () {
      return this.todos.length
    }
  },

  methods: {
    addNewTodo () {
      this.todos.unshift({
        id: this.newTodoId,
        text: this.newTodoText
      })
      this.newTodoText = ''
    }
  },

  components: {
    todoItems,
    todoTabs
  }
}
</script>

<style lang="stylus" scoped>

  .main-body
    .todo-input
      width 600px
      margin 20px auto
      box-shadow 0 0 5px #666
    .todo-list
      width 600px
      margin 0 auto
      box-shadow 0 0 5px #666


  .add-input
    position relative
    background-color #f3f8f1
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border 0
    outline none
    color #333
    box-sizing border-box
    font-smoothing antialiased
    padding 22px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)

</style>