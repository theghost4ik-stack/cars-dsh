<script setup>
defineProps({
  isForImage: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <span v-if="isForImage" class="custom-image-badge" :class="`custom-image-badge--${variant}`">
    {{ label }}
  </span>
  <span v-else class="custom-badge" :class="`custom-badge--${variant}`">
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
.custom-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &--success {
    background-color: rgba(22, 128, 61, 0.12);
    color: rgb(22, 128, 61);
  }

  &--danger {
    background-color: rgba(200, 30, 30, 0.1);
    color: rgb(180, 30, 30);
  }

  &--warning {
    background-color: rgba(200, 140, 0, 0.12);
    color: rgb(180, 120, 0);
  }

  &--info {
    background-color: rgba(30, 100, 200, 0.1);
    color: rgb(30, 100, 200);
  }

  &--default {
    background-color: rgba(100, 100, 100, 0.1);
    color: rgb(130, 130, 130);
  }
}
.custom-image-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &--success {
    background-color: rgb(22, 128, 61);
    color: rgb(255, 255, 255);
  }

  &--danger {
    background-color: rgb(200, 30, 30);
    color: rgb(255, 255, 255);
  }

  &--warning {
    background-color: rgb(200, 140, 0);
    color: rgb(255, 255, 255);
  }

  &--info {
    background-color: rgb(30, 100, 200);
    color: rgb(255, 255, 255);
  }

  &--default {
    background-color: rgb(100, 100, 100);
    color: rgb(255, 255, 255);
  }
}
</style>