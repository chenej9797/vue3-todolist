<template>
  <div class="todo-list-container">
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="sass" scoped>
.todo-list-container
  @apply flex justify-center fixed w-full h-full
  @screen md
    @apply relative w-auto h-auto
    padding-top: 10vh
</style>
