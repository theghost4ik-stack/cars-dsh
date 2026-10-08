<script setup>
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import { dealership } from '@/data/cars';
import { ref, computed } from 'vue';

const firstTypeSelection = ref(null)
const secondTypeSelection = ref(null)
const firstBrandSelection = ref(null)
const secondBrandSelection = ref(null)
const firstModelSelection = ref(null)
const secondModelSelection = ref(null)

const bodyTypeOptions = computed(() =>
  dealership.bodyTypes.map((type) => ({
    value: type.id,
    label: type.name
  }))
)

const firstModel = computed(() => {
  const type = dealership.bodyTypes.find((t) => t.id === firstTypeSelection.value)
  if (!type) return null

  const brand = type.brands.find((b) => b.id === firstBrandSelection.value)
  if (!brand) return null

  const model = brand.models.find((m) => m.id === firstModelSelection.value)
  if (!model) return null

  return { ...model, brandName: brand.name }
})

const secondModel = computed(() => {
  const type = dealership.bodyTypes.find((t) => t.id === secondTypeSelection.value)
  if (!type) return null

  const brand = type.brands.find((b) => b.id === secondBrandSelection.value)
  if (!brand) return null

  const model = brand.models.find((m) => m.id === secondModelSelection.value)
  if (!model) return null

  return { ...model, brandName: brand.name }
})

function getBrandOptions(typeId) {
  if (!typeId) return []

  const type = dealership.bodyTypes.find((t) => t.id === typeId)
  if (!type) return []

  return type.brands.map((brand) => ({
    value: brand.id,
    label: brand.name
  }))
}

function getModelOptions(typeId, brandId, anotherModelId) {
  const type = dealership.bodyTypes.find((t) => t.id === typeId)
  if (!type) return []

  const brand = type.brands.find((b) => b.id === brandId)
  if (!brand) return []
 
  return brand.models
  .filter((model) => model.id !== anotherModelId)
  .map((model) => ({
    value: model.id,
    label: model.name
  }))
}
</script>

<template>
  <div class="comparison-page">
    <div class="comparison-page__info">
      <h1 class="comparison-page__info-title">Comparison Page</h1>
    </div>
    <div class="comparison-page__blocks">
      <div class="comparison-page__block">
        <div class="comparison-page__selections">
          <CustomSelect
            v-model="firstTypeSelection"
            :options="bodyTypeOptions"
            icon="mdi-car-outline"
            placeholder="Choose body type"
          />
          <CustomSelect
            v-if="firstTypeSelection && secondTypeSelection"
            v-model="firstBrandSelection"
            :options="getBrandOptions(firstTypeSelection)"
            icon="mdi-tag-outline"
            placeholder="Choose brand"
            @update:modelValue="getBrandOptions(firstTypeSelection)"
          />
          <CustomSelect
            v-if="firstBrandSelection && secondBrandSelection"
            v-model="firstModelSelection"
            :options="getModelOptions(firstTypeSelection, firstBrandSelection, secondModelSelection)"
            icon="mdi-car-info"
            placeholder="Choose model"
            @update:modelValue="getModelOptions(firstTypeSelection, firstBrandSelection, secondModelSelection)"
          />
        </div>
        <div v-if="firstModel && secondModel" class="comparison-page__cars-info">
          <div class="comparison-page__car">
            <img :src="firstModel.photos[0]" :alt="`${firstModel.brandName} ${firstModel.name}`">
            <h2>{{ firstModel.brandName }} {{ firstModel.name }}</h2>
            <div class="comparison-page__car--specs">
              <span>Year: {{ firstModel.year }}</span>
              <span>Price: {{ firstModel.price }}</span>
              <span>Fuel: {{ firstModel.specs.fuel }}</span>
              <span>Power: {{ firstModel.specs.power }} hp.</span>
            </div>
            <router-link :to="{ name: 'car', params: { bodyType: firstTypeSelection, brand: firstBrandSelection, model: firstModel.id } }" class="main-page__banner">
              <CustomButton>
                More
              </CustomButton>
            </router-link>
          </div>
        </div>
      </div>
      <div class="comparison-page__block">
        <div class="comparison-page__selections">
          <CustomSelect
            v-model="secondTypeSelection"
            :options="bodyTypeOptions"
            icon="mdi-car-outline"
            placeholder="Choose body type"
          />
          <CustomSelect
            v-if="firstTypeSelection && secondTypeSelection"
            v-model="secondBrandSelection"
            :options="getBrandOptions(secondTypeSelection)"
            icon="mdi-tag-outline"
            placeholder="Choose brand"
          />
          <CustomSelect
            v-if="firstBrandSelection && secondBrandSelection"
            v-model="secondModelSelection"
            :options="getModelOptions(secondTypeSelection, secondBrandSelection, firstModelSelection)"
            icon="mdi-car-info"
            placeholder="Choose model"
          />
        </div>
        <div v-if="firstModel && secondModel" class="comparison-page__cars-info">
          <div class="comparison-page__car">
            <img :src="secondModel.photos[0]" :alt="`${secondModel.brandName} ${secondModel.name}`">
            <h2>{{ secondModel.brandName }} {{ secondModel.name }}</h2>
            <div class="comparison-page__car--specs">
              <span>Year: {{ secondModel.year }}</span>
              <span>Price: {{ secondModel.price }}</span>
              <span>Fuel: {{ secondModel.specs.fuel }}</span>
              <span>Power: {{ secondModel.specs.power }} hp.</span>
            </div>
            <router-link :to="{ name: 'car', params: { bodyType: secondTypeSelection, brand: secondBrandSelection, model: secondModel.id } }" class="main-page__banner">
              <CustomButton>
                More
              </CustomButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comparison-page {
  &__info {
    padding: 24px;
    gap: 10px;

    &-title {
      font-family: 'Barlow Condensed', 'Barlow', sans-serif;
      font-weight: 600;
      font-size: 30px;
    }
  }

  &__blocks {
    display: flex;
    gap: 30px;
    padding: 0 24px 24px;
    justify-content: center;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px dotted rgb(0, 0, 0);
    border-radius: 12px;
    width: 600px;
    padding: 20px;
  }

  &__selections {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__car {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 10px;
    
    &--specs {
      display: flex;
      flex-direction: column;
    }

    img {
      display: block;
      margin-bottom: 10px;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
    }
  }
}
</style>