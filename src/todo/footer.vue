<template>
  <div class="main-footer">
    <span>Powerd by </span><a href="https://rusyue.com" target="_blank">{{ author }}</a>
    <span>Hosted by </span><a href="https://pages.github.com" target="_blank">Github Pages</a>
  </div>
</template>

<script>
export default {
  name: 'footer',

  data () {
    return {
      author: 'Rusyue'
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-footer
  margin-top 3em
  font-family Times,Verdana,Arial

  a
    color #d4f2e8

    &:visited
      color #d4f2e8
    &:active
      color #9d2932

</style>