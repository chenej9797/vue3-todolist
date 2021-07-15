<template>
  <div class="app-input"
    :class="{
      'shadow-sm hover:shadow-inner': !isFocusedInput, 
      'shadow-inner': isFocusedInput
    }"
  >
    <input
      class="app-input__input"
      v-model="innerModelValue"
      @input="changeHandler"
      @focus="toggleFocusState(true)"
      @blur="toggleFocusState(false)"
    >
  </div>
</template>

<script>
import { ref, toRef, watch } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup (props, context) {
    const innerModelValue = ref(props.modelValue.value)
    const changeHandler = () => {
      context.emit('update:modelValue', innerModelValue.value)
    }
    watch(
      () => props.modelValue,
      (newVal, oldVal) => {
        if (newVal !== oldVal) innerModelValue.value = newVal
      }
    )

    const isFocusedInput = ref(false)
    const toggleFocusState = (isFocus) => {
      isFocusedInput.value = isFocus
    }

    return {
      innerModelValue,
      changeHandler,
      isFocusedInput,
      toggleFocusState
    }
  }
}
</script>

<style lang="sass" scoped>
$input-padding: 6px

.app-input
  @apply rounded-full px-5
  padding-top: $input-padding
  padding-bottom: $input-padding

  &__input
    @apply text-sm w-full
    line-height: calc(#{$form-height} - 2 * #{$input-padding})
</style>
