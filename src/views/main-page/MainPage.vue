<script setup>
import CarInfoCard from '@/components/cars/CarInfoCard.vue'
import { dealership } from '@/data/cars';

const bannerImageUrl = "https://nar-dam.audi.com/adobe/assets/urn:aaid:aem:ee64ddcf-9a21-4565-8d64-d81e564d5faf/as/1920x1080_MY27-Q7-Exterior-Rear-8637.jpg?width=1920"

const featuredCars = [
  { bodyType: 'suv', brand: 'audi', modelId: 70 },
  { bodyType: 'sedan', brand: 'bmw', modelId: 19 },
  { bodyType: 'suv', brand: 'mercedes-benz', modelId: 41 },
  { bodyType: 'crossover', brand: 'toyota', modelId: 28 },
  { bodyType: 'sedan', brand: 'lexus', modelId: 21 },
  { bodyType: 'coupe', brand: 'bmw', modelId: 48 },
  { bodyType: 'suv', brand: 'lexus', modelId: 44 },
  { bodyType: 'hatchback', brand: 'byd', modelId: 4 },
  { bodyType: 'sedan', brand: 'mercedes-benz', modelId: 18 },
  { bodyType: 'pickup', brand: 'toyota', modelId: 56 },
]

const cars = featuredCars.map(({ bodyType, brand, modelId }) => {
  const type = dealership.bodyTypes.find((t) => t.id === bodyType)
  const b = type?.brands.find((br) => br.id === brand)
  const model = b?.models.find((m) => m.id === modelId)
  if (!model) return null
  return { ...model, bodyType, brandId: brand }
}).filter(Boolean)
</script>

<template>
  <div class="main-page">
    <router-link :to="{ name: 'car', params: { bodyType: 'suv', brand: 'audi', model: 70 } }" class="main-page__banner">
      <img :src="bannerImageUrl" alt="Audi">
    </router-link>
    <div class="main-page__info">
      <h1 class="main-page__info-title">Main Page</h1>
    </div>
    <div class="main-page__cars">
      <CarInfoCard
        v-for="car in cars"
        :key="car.id"
        :model="car"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  &__banner {
    display: block;
    height: 420px;
    overflow: hidden;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
      opacity: 0.95;
    }
  }
  &__info {
    padding: 24px;
    gap: 10px;

    &-title {
      font-family: 'Barlow Condensed', 'Barlow', sans-serif;
      font-weight: 600;
      font-size: 30px;
    }
  }

  &__cars {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 0 24px 24px;
  }
}
</style>