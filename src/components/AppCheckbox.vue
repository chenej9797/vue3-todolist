<template>
  <div
    class="checkbox cursor-pointer"
    :class="{
      'shadow-sm hover:shadow-inner': !modelValue,
      'shadow-inner-dark bg-primary': modelValue
    }"
    @click="changeHandler"
  >
    <span
      v-if="modelValue"
      class="checkbox__icon material-icons-round">
      done
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup (props, context) {
    const changeHandler = () => {
      context.emit('update:modelValue', !props.modelValue)
    }

    return {
      changeHandler
    }
  }
}
</script>

<style lang="sass" scoped>
 $size: 26px

.checkbox
  @apply rounded-md text-center select-none
  +size($size)
  transition: background .2s

  &__icon
    @apply text-white font-bold
    line-height: $size
    transform: scale(.75)
</style>