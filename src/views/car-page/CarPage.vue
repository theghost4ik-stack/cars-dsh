<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { dealership } from '@/data/cars';
import { formatPrice } from '@/utils/format';
import CustomBadge from '@/components/ui/CustomBadge.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import CustomField from '@/components/ui/CustomField.vue';
import CustomButton from '@/components/ui/CustomButton.vue';

const route = useRoute();
const isBuilding = ref(false)

const selectedTrim = ref(null)
const selectedTransmission = ref(null)
const selectedColor = ref(null)

const name = ref('')
const number = ref('')

const bodyType = computed(() =>
dealership.bodyTypes.find((type) => type.id === route.params.bodyType)
)
const brand = computed(() =>
bodyType.value?.brands.find((item) => item.id === route.params.brand)
)
const model = computed(() =>
brand.value?.models.find((item) => String(item.id) === route.params.model)
)

const trimOptions = computed(() =>
  model.value?.configuration?.trims.map((t) => ({ value: t, label: t })) ?? []
)
const transmissionOptions = computed(() =>
  model.value?.configuration?.transmissions.map((t) => ({ value: t, label: t })) ?? []
)
const colorOptions = computed(() =>
  model.value?.configuration?.colors.map((c) => ({ value: c, label: c })) ?? []
)

const photos = computed(() => model.value?.photos ?? [])
const activePhotoIndex = ref(0)
const activePhoto = computed(() => photos.value[activePhotoIndex.value])

const specs = computed(() => {
  if (!model.value) return [];

  const { engine, power, fuel, drive, seats } = model.value.specs;

  return [
    { label: 'Release date', value: model.value.year },
    { label: 'Body type', value: bodyType.value.name },
    { label: 'Engine', value: engine },
    { label: 'Power', value: `${power} hp` },
    { label: 'Fuel', value: fuel },
    { label: 'Drive', value: drive },
    { label: 'Seats', value: seats }
  ];
});

const configuration = computed(() => {
  if (!model.value) return [];

  const { trims, transmissions, colors } = model.value.configuration;

  return [
    { label: 'Configurations', values: trims },
    { label: 'Transmissons', values: transmissions },
    { label: 'Colors', values: colors }
  ];
});

function notFilled() {
    if (name.value && number.value && selectedTrim.value && selectedTransmission.value && selectedColor.value) {
        return false
    }
    return true
}

function confirmData() {
    saveData()
    clearFields()
}

function clearFields() {
    name.value = ''
    number.value = ''

    selectedTrim.value = null
    selectedTransmission.value = null
    selectedColor.value = null

    isBuilding.value = false
}

function saveData() {

}

watch(
  () => route.params.model,
  () => {
    activePhotoIndex.value = 0;
  }
);
</script>

<template>
  <div v-if="model" class="car-page">
    <nav class="car-page__breadcrumbs" aria-label="Catalog navigation">
      <router-link :to="{ name: 'catalog', params: { bodyType: bodyType.id } }">
        {{ bodyType.name }}
      </router-link>
      <i class="mdi mdi-chevron-right"></i>
      <router-link :to="{ name: 'catalog', params: { bodyType: bodyType.id, brand: brand.id } }">
        {{ brand.name }}
      </router-link>
      <i class="mdi mdi-chevron-right"></i>
      <span aria-current="page">{{ model.name }}</span>
    </nav>

    <div class="car-page__content">
      <section class="car-page__gallery">
        <div class="car-page__photo">
          <img v-if="activePhoto" :src="activePhoto" :alt="`${brand.name} ${model.name}`">
          <i v-else class="mdi mdi-car car-page__photo-placeholder"></i>
        </div>

        <div v-if="photos.length > 1" class="car-page__thumbs">
          <button
            v-for="(photo, index) in photos"
            :key="index"
            type="button"
            class="car-page__thumb"
            :class="{ 'car-page__thumb--active': index === activePhotoIndex }"
            :aria-label="`Photo ${index + 1}`"
            :aria-pressed="index === activePhotoIndex"
            @click="activePhotoIndex = index"
          >
            <img :src="photo" alt="" loading="lazy">
          </button>
        </div>
      </section>

      <section class="car-page__info">
        <div class="car-page__top">
          <span class="car-page__brand">{{ brand.name }}</span>
          <CustomBadge
            :label="model.status === 'available' ? 'Available' : 'Sold'"
            :variant="model.status === 'available' ? 'success' : 'default'"
          />
        </div>

        <h1 class="car-page__title">{{ model.name }}</h1>
        <div
          class="car-page__price"
          :class="{ 'car-page__price--sold': model.status === 'sold' }"
        >
          {{ formatPrice(model.price) }}
        </div>

        <dl class="car-page__specs">
          <div v-for="spec in specs" :key="spec.label" class="car-page__spec">
            <dt>{{ spec.label }}</dt>
            <dd>{{ spec.value }}</dd>
          </div>
        </dl>
        <template v-if="!isBuilding">
          <div
            v-for="group in configuration"
            :key="group.label"
            class="car-page__options"
          >
            <span class="car-page__options-label">{{ group.label }}</span>
            <div class="car-page__chips">
              <span v-for="value in group.values" :key="value" class="car-page__chip">
                {{ value }}
              </span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="car-page__selects">
            <div class="car-page__options">
              <span class="car-page__options-label">Configuration</span>
              <CustomSelect
                v-model="selectedTrim"
                :options="trimOptions"
                placeholder="Choose trim"
                icon="mdi-tune"
                @update:modelValue="notFilled"
              />
            </div>
            <div class="car-page__options">
              <span class="car-page__options-label">Transmission</span>
              <CustomSelect
                v-model="selectedTransmission" 
                :options="transmissionOptions" 
                placeholder="Choose transmission" 
                icon="mdi-cog-outline"
                @update:modelValue="notFilled"
              />
            </div>
            <div class="car-page__options">
              <span class="car-page__options-label">Color</span>
              <CustomSelect 
                v-model="selectedColor" 
                :options="colorOptions" 
                placeholder="Choose color" 
                icon="mdi-palette-outline"
                @update:modelValue="notFilled"
              />
            </div>
          </div>
          <div class="car-page__fields">
              <CustomField v-model="name" placeholder="Input name" labelTitle="Name" @input="notFilled"/>
              <CustomField v-model="number" placeholder="Input phone number" labelTitle="Phone" @input="notFilled" phone/>
          </div>
        </template>
        <div v-if="model.status === 'available'">
          <div v-if="!isBuilding" class="car-page__actions">
            <CustomButton @click="isBuilding = true">Build</CustomButton>
          </div>
          <div v-else class="car-page__actions">
            <CustomButton :disabled="notFilled()" @click="confirmData">Confirm</CustomButton>
            <CustomButton @click="clearFields" variant="secondary">Close</CustomButton>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="car-page__not-found">
    <i class="mdi mdi-car-off"></i>
    <h1>Car's not found</h1>
    <p>The model may have been withdrawn from sale or the link is outdated.</p>
    <router-link :to="{ name: 'main' }" class="car-page__back">
      Back to main
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);
$primary-hover: rgb(170, 12, 38);
$text: rgb(22, 24, 29);
$muted: rgb(120, 125, 135);
$border: rgb(229, 231, 235);
$surface: rgb(255, 255, 255);
$placeholder-bg: rgb(241, 243, 245);
$success: rgb(22, 128, 61);
$success-bg: rgba(22, 128, 61, 0.1);

.car-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;

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

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 32px;
    align-items: start;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }

  &__gallery {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__photo {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 16px;
    background: $placeholder-bg;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__photo-placeholder {
    font-size: 64px;
    color: $muted;
  }

  &__thumbs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    gap: 8px;
  }

  &__thumb {
    aspect-ratio: 16 / 10;
    padding: 0;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 10px;
    background: $placeholder-bg;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.15s ease, border-color 0.15s ease;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      opacity: 1;
    }

    &--active {
      border-color: $primary;
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 2px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: sticky;
    top: 24px;
    padding: 24px;
    border: 1px solid $border;
    border-radius: 16px;
    background: $surface;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__brand {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $muted;
  }

  &__title {
    margin: 0;
    font-family: 'Barlow Condensed', 'Barlow', sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;
    color: $text;
  }

  &__price {
    margin-top: 4px;
    font-size: 28px;
    font-weight: 600;
    color: $primary;
    font-variant-numeric: tabular-nums;

    &--sold {
      color: $muted;
    }
  }

  &__specs {
    display: flex;
    flex-direction: column;
    margin: 16px 0 0;
    border-top: 1px solid $border;
  }

  &__spec {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid $border;
    font-size: 14px;

    dt {
      color: $muted;
    }

    dd {
      margin: 0;
      color: $text;
      font-weight: 500;
      text-align: right;
    }
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__options-label {
    font-size: 16px;
    color: $muted;
  }

  &__selects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
  }

  &__fields {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
  }

  &__actions {
      display: flex;
      justify-content: start;
      gap: 10px;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  &__chip {
    padding: 4px 12px;
    border: 1px solid $border;
    border-radius: 10px;
    font-size: 13px;
    color: $text;
  }

  &__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 80px 24px;
    text-align: center;
    color: $text;

    .mdi {
      font-size: 64px;
      color: $muted;
    }

    h1 {
      margin: 8px 0 0;
      font-size: 24px;
    }

    p {
      margin: 0;
      color: $muted;
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