<template>
  <div class="helper">
      <span class="left">{{unFinishedTodoLength}} items left</span>
      <span class="tabs">
          <span
                  v-for="state in states"
                  :key="state"
                  :class="[state, filter === state ? 'actived' : '']"
                  @click="toggleFilter(state)"
          >
              {{state}}
          </span>
      </span>
      <span class="clear" @click="clearAllCompleted()">
          Clear Completed
      </span>
  </div>
</template>

<script>
export default {

  name: 'tabs',

  data () {
    return {
      unFinishedTodoLength: 4,
      states: ['all', 'actived', 'completed'],
      filter: 'all'
    }
  },

  methods: {
    toggleFilter() {

    },
    clearAllCompleted() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.helper {
    width 600px
    margin 10px auto
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #f3f8f1
    color #424b50
    box-shadow 0 0 5px #666
    font-size 14px
    font-smoothing: antialiased;
}

.left, .clear, .tabs {
    padding 0 10px
    box-sizing border-box
}

.left, .clear {
    width 150px
}

.left {
    text-align left
}

.clear {
    text-align: right
    cursor pointer
}

.tabs {
    width 200px
    display flex
    justify-content space-around
    * {
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175, 47, 47, 0)
        &.actived {
            border-color rgba(175, 47, 47, 0.4)
            border-radius 5px
        }
    }
}
</style>