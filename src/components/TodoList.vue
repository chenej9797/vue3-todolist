<template>
  <section class="todo-list shadow">
    <h1 class="text-3xl text-primary-light font-bold tracking-wider select-none">
      TO-DO
    </h1>

    <div class="todo-list__divider my-4"></div>

    <div class="todo-list__content">
      <ul class="todo-list__list">
        <li
          v-for="(item, index) in todoList"
          :key="`todo_${index}`"
          class="todo-list__item flex items-center mb-4 last:mb-4"
        >
          <AppCheckbox
            v-model="item.isDone"
          ></AppCheckbox>
          <span
            class="flex-grow mx-4"
            :class="{'line-through text-primary-light': item.isDone}"
          >
            {{ item.context }}
          </span>
          <button
            class="todo-list__item__btn--delete btn btn-round btn-flat md:opacity-0"
            @click="deleteTodo(index)"
          >
            <span class="btn__icon material-icons-round">
              <span class="material-icons-round text-danger">
                remove_circle_outline
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <div class="flex items-between items-center pt-4">
      <AppInput
        class="flex-grow mr-4"
        v-model="inputForm"
        @keydown.enter="addTodo"
      ></AppInput>
      <button
        class="btn btn-round"
        @click="addTodo"
      >
        <span class="btn__icon material-icons-round">
          add
        </span>
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import AppCheckbox from './AppCheckbox.vue'
import AppInput from './AppInput.vue'

export default {
  name: 'TodoList',
  components: {
    AppCheckbox,
    AppInput
  },
  setup () {
    const inputForm = ref('')
    const todoList = ref([
      {
        context: 'Meeting',
        isDone: true
      },
      {
        context: 'Reading',
        isDone: false
      }
    ])

    const addTodo = () => {
      if (!inputForm.value) return
      todoList.value.push({
        context: inputForm.value,
        isDone: false
      })
      inputForm.value = ''
    }

    const deleteTodo = index => {
      todoList.value.splice(index, 1)
    }

    const toggleTodo = index => {
      todoList.value[index].isDone = !todoList.value[index].isDone
    }

    return {
      inputForm,
      todoList,
      addTodo,
      deleteTodo,
      toggleTodo
    }
  },
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="sass" scoped>
$header-height: 36px
$divider-height: 40px

.todo-list
  @apply bg-white flex flex-col py-6 px-8 w-full h-full
  min-height: 550px

  @screen md
    @apply rounded-3xl
    +size(400px, 80vh)

  &__divider
    @apply rounded-md shadow-inner
    +size(100%, 8px)

  &__content
    @apply flex-grow overflow-hidden
    +size(100%, calc(100% - 48px - #{$header-height} - #{$divider-height} - #{$form-height}))
    @screen md
      height: calc(550px - 48px - #{$header-height} - #{$divider-height} - #{$form-height})

  &__list
    @apply overflow-x-hidden overflow-y-scroll pl-2
    +size(calc(100% + 16px), 100%)
    padding-right: 16px

  &__item
    +hover
      .todo-list__item__btn--delete
        @apply opacity-100

    &__btn--delete
      transition: opacity .2s
</style>