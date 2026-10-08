<script setup>
import CustomBadge from '@/components/ui/CustomBadge.vue'
import { formatPrice } from '@/utils/format'

defineProps({
  model: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <router-link
    :to="{ name: 'car', params: { bodyType: model.bodyType, brand: model.brandId, model: model.id } }"
    class="car-info-card"
    :class="{ 'car-info-card--sold': model.status === 'sold' }"
  >
    <div class="car-info-card__photo">
      <img
        v-if="model.photos?.length"
        :src="model.photos[0]"
        :alt="`${model.brandName} ${model.name}`"
      >
      <CustomBadge
        class="car-info-card__status"
        :label="model.status === 'available' ? 'Available' : 'Sold'"
        :variant="model.status === 'available' ? 'success' : 'default'"
        :isForImage="true"
      />
    </div>

    <div class="car-info-card__info">
      <span class="car-info-card__name">{{ model.brandName }} {{ model.name }}</span>
      <span class="car-info-card__meta">
        {{ model.year }} · {{ model.specs.fuel }} · {{ model.specs.power }} hp
      </span>
      <span class="car-info-card__price">{{ formatPrice(model.price) }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.car-info-card {
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgb(230, 230, 230);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  &--sold {
    opacity: 0.6;
  }

  &__photo {
    position: relative;
    aspect-ratio: 16 / 10;
    background-color: rgb(245, 245, 245);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__status {
    position: absolute;
    top: 12px;
    left: 12px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px;
  }

  &__name {
    font-weight: 600;
    font-size: 15px;
    color: rgb(20, 20, 20);
  }

  &__meta {
    font-size: 13px;
    color: rgb(140, 140, 140);
  }

  &__price {
    font-size: 15px;
    font-weight: 700;
    color: rgb(20, 20, 20);
    margin-top: 4px;
  }
}
</style>