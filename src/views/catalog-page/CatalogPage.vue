<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { dealership } from '@/data/cars';
import { pluralize } from '@/utils/format';
import CarInfoCard from '@/components/cars/CarInfoCard.vue';

const route = useRoute();

const bodyType = computed(() =>
  dealership.bodyTypes.find((type) => type.id === route.params.bodyType)
);

const selectedBrand = computed(() => {
  if (!route.params.brand) return null;
  return bodyType.value?.brands.find((brand) => brand.id === route.params.brand) ?? null;
});

const models = computed(() => {
  if (!bodyType.value) return [];
  if (route.params.brand && !selectedBrand.value) return [];

  const brands = selectedBrand.value ? [selectedBrand.value] : bodyType.value.brands;

  return brands.flatMap((brand) =>
    brand.models.map((model) => ({
      ...model,
      brandId: brand.id,
      brandName: brand.name
    }))
  );
});
</script>

<template>
  <div class="catalog">
    <header class="catalog__header">
      <nav class="catalog__breadcrumbs" aria-label="Catalog navigation">
        <router-link :to="{ name: 'catalog', params: { bodyType: bodyType.id } }">
          {{ bodyType.name }}
        </router-link>

        <template v-if="selectedBrand">
          <i class="mdi mdi-chevron-right"></i>
          <router-link :to="{ name: 'catalog', params: { bodyType: bodyType.id, brand: selectedBrand.id } }">
            {{ selectedBrand.name }}
          </router-link>
        </template>
      </nav>
      <span v-if="models.length" class="catalog__count">
        {{ models.length }} {{ pluralize(models.length, ['model', 'models', 'models']) }}
      </span>
    </header>

    <div v-if="models.length" class="catalog__grid">
      <CarInfoCard
        v-for="model in models"
        :key="model.id"
        :model="model"
      />
    </div>

    <div v-else class="catalog__empty">
      <i class="mdi mdi-car-search-outline"></i>
      <p>{{ bodyType ? 'There are no cars in this section yet' : 'Check page address' }}</p>
      <router-link :to="{ name: 'main' }" class="catalog__back">Back to main</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);
$primary-hover: rgb(170, 12, 38);
$text: rgb(22, 24, 29);
$muted: rgb(120, 125, 135);
$surface: rgb(255, 255, 255);
$placeholder-bg: rgb(241, 243, 245);
$success: rgb(22, 128, 61);
$sold-bg: rgba(22, 24, 29, 0.75);

.catalog {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 12px;
  }

  &__title {
    margin: 0;
    font-family: 'Barlow Condensed', 'Barlow', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: $text;
  }

  &__breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: $muted;

    a {
      color: $muted;
      text-decoration: none;

      &:hover {
        color: $primary;
      }
    }

    span {
      color: $text;
      font-weight: 500;
    }
  }

  &__count {
    font-size: 14px;
    color: $muted;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 12px;
    color: inherit;
    text-decoration: none;

    &:hover .catalog__photo img {
      transform: scale(1.04);
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 4px;
    }

    &--sold {
      .catalog__photo img {
        filter: grayscale(0.6);
        opacity: 0.8;
      }

      .catalog__price {
        color: $muted;
      }
    }
  }

  &__photo {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 12px;
    background: $placeholder-bg;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease;
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
    gap: 2px;
  }

  &__name {
    font-family: 'Barlow Condensed', 'Barlow', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: $text;
  }

  &__meta {
    font-size: 13px;
    color: $muted;
  }

  &__price {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 600;
    color: $text;
    font-variant-numeric: tabular-nums;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 80px 24px;
    text-align: center;
    color: $muted;

    .mdi {
      font-size: 56px;
    }

    p {
      margin: 0;
      font-size: 15px;
    }
  }

  &__back {
    margin-top: 12px;
    padding: 10px 18px;
    border-radius: 8px;
    background: $primary;
    color: $surface;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      background: $primary-hover;
    }
  }
}
</style>