<template>
  <section class="main-body">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
    >
  </section>
</template>

<script>
export default {

  name: 'todo',

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

  .main-body
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
    color #888
    box-sizing border-box
    font-smoothing antialiased
    padding 22px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
    opacity .5

    &:hover,
    &:focus
      opacity 1
      color #424b50

</style>