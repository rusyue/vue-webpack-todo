<template>
  <div class="todo-items">
    <input
      type="checkbox"
      :id="todo.id"
      :class="[todo.completed ? 'completed' : '']"
      v-model="todo.completed"
    />
    <label :for="todo.id">{{ todo.text }}</label>
    <button>×</button>
  </div>
</template>

<script>
export default {
  name: 'items',
  props: [
    'todo'
  ],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-items
  position relative
  background-color #f3f8f1
  margin 0
  width 100%
  font-size 18px
  font-family inherit
  font-weight inherit
  line-height 1em
  border 0
  outline none
  color #333
  box-sizing border-box
  font-smoothing antialiased
  padding 22px 16px 16px 36px
  border none
  box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)

  input[type="checkbox"]
    position absolute
    appearance none
    left 0px
    width 0
    visibility hidden
    display none
    &.completed
      +label
        text-decoration line-through
        color #424b5088
        &::before
          background-image url('../assets/images/checkbox_checked_icon.png')

    +label
      display block
      text-align left
      padding-left 1em
      &::before
        content: "\200b"
        cursor pointer
        display block
        position absolute
        left 10px
        $icon-size = 32px
        width $icon-size
        height $icon-size
        top 50%
        margin-top -($icon-size / 2)
        background transparent url('../assets/images/checkbox_unchecked_icon.png') no-repeat 0 0/100% 100%

  button
    position absolute
    width 40px
    height 40px
    right 0
    top 50%
    margin-top -20px
    box-sizing border-box
    font-family Arial,"Microsoft YaHei"
    font-size 40px
    line-height 40px
    background-color transparent
    border none
    cursor pointer
    color #9d293244
    outline none
    &:hover
      color #9d2932aa
    &:active
      color #9d2932ff

</style>