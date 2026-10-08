<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Select'
  },
  icon: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectRef = ref(null)

const selectedOption = computed(() =>
  props.options.find((opt) => opt.value === props.modelValue) ?? null
)

function select(option) {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

function handleOutsideClick(event) {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick))
</script>

<template>
  <div class="custom-select" :class="{ 'custom-select--open': isOpen }" ref="selectRef">
    <button type="button" class="custom-select__trigger" @click="isOpen = !isOpen">
      <i v-if="icon" :class="`mdi ${icon} custom-select__icon`"></i>
      <span class="custom-select__value">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      <i class="mdi mdi-chevron-down custom-select__arrow"></i>
    </button>

    <div v-if="isOpen" class="custom-select__dropdown">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="custom-select__option"
        :class="{ 'custom-select__option--active': modelValue === option.value }"
        @click="select(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    background-color: transparent;
    border: 1px solid rgb(220, 223, 228);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(22, 24, 29);
    cursor: pointer;
    transition: border-color 0.15s ease;

    &:hover {
      border-color: rgb(180, 184, 190);
    }
  }

  &--open &__trigger {
    border-color: rgb(200, 16, 46);
  }

  &__icon {
    font-size: 16px;
    color: rgb(0, 0, 0);
  }

  &__value {
    white-space: nowrap;
  }

  &__arrow {
    font-size: 16px;
    color: rgb(140, 145, 155);
    transition: transform 0.2s ease;
  }

  &--open &__arrow {
    transform: rotate(180deg);
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    min-width: 100%;
    max-height: 200px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(220, 223, 228);
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 100;
    overflow: scroll;
  }

  &__option {
    display: block;
    width: 100%;
    padding: 10px 14px;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: rgb(0, 0, 0);
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease;
    white-space: nowrap;

    &:hover {
      background-color: rgb(245, 246, 248);
    }

    &--active {
      color: rgb(200, 16, 46);
      background-color: rgba(200, 16, 46, 0.05);
    }
  }
}
</style>