<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
});

const slots = useSlots();

const isIconOnly = computed(() => !slots.default && Boolean(props.icon));
</script>

<template>
  <button
    class="custom-button"
    :class="[
      `custom-button--${variant}`,
      `custom-button--${size}`,
      {
        'custom-button--loading': loading,
        'custom-button--icon-only': isIconOnly,
      },
    ]"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading"
  >
    <span class="custom-button__content">
      <i v-if="icon" class="mdi custom-button__icon" :class="icon" aria-hidden="true"></i>
      <span v-if="$slots.default" class="custom-button__label">
        <slot />
      </span>
    </span>

    <span v-if="loading" class="custom-button__spinner" aria-hidden="true"></span>
  </button>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);
$primary-hover: rgb(165, 13, 38);
$dark: rgb(22, 24, 29);
$dark-hover: rgb(42, 45, 53);
$danger: rgb(217, 48, 37);
$danger-hover: rgb(179, 38, 30);
$text: rgb(22, 24, 29);
$border: rgb(213, 216, 222);
$hover-bg: rgb(242, 243, 245);

.custom-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.1s ease;

  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__content {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &__icon {
    font-size: 1.25em;
    line-height: 1;
  }

  &__spinner {
    position: absolute;
    width: 1.1em;
    height: 1.1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: custom-button-spin 0.7s linear infinite;
  }

  &--loading {
    cursor: progress;

    &:disabled {
      opacity: 1;
    }

    .custom-button__content {
      visibility: hidden;
    }
  }

  &--sm {
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
  }

  &--md {
    height: 40px;
    padding: 0 18px;
    font-size: 14px;
  }

  &--lg {
    height: 52px;
    padding: 0 28px;
    font-size: 16px;
  }

  &--icon-only {
    padding: 0;
    aspect-ratio: 1;
  }

  &--primary {
    background: $primary;
    color: rgb(250, 250, 250);

    &:hover:not(:disabled) {
      background: $primary-hover;
    }
  }

  &--secondary {
    background: $dark;
    color: rgb(250, 250, 250);

    &:hover:not(:disabled) {
      background: $dark-hover;
    }
  }

  &--outline {
    background: transparent;
    border-color: $border;
    color: $text;

    &:hover:not(:disabled) {
      border-color: $text;
      background: $hover-bg;
    }
  }

  &--ghost {
    background: transparent;
    color: $text;

    &:hover:not(:disabled) {
      background: $hover-bg;
    }
  }

  &--danger {
    background: $danger;
    color: rgb(250, 250, 250);

    &:hover:not(:disabled) {
      background: $danger-hover;
    }
  }
}

@keyframes custom-button-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>