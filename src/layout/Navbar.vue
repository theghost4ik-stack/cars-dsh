<script setup>
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import TestDriveForm from '@/layout/TestDriveForm.vue';
import { onMounted, ref } from 'vue';
import { cities } from '@/data/location';

const showDialog = ref(false)
const localCity = ref(null)

function toLocal() {
  localStorage.setItem('location', localCity.value)
}

function makeCall(num) {
  window.location.href = `tel:${num}`
}

onMounted(async () => {
  const saved = localStorage.getItem('location')

  if (saved) {
    localCity.value = saved
    return
  }

  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    const newCity = data.city.toLowerCase()
    const isInlist = cities.some(city => city.value === newCity)
    localCity.value = isInlist ? newCity : 'not-resident'
    toLocal()
  } catch {
    localCity.value = 'not-resident'
  }
})
</script>

<template>
  <header class="navbar">
    <router-link
      :to="{ name: 'main'}"
      class="navbar__logo"
    >
      <span>BEST DSH.</span>
    </router-link>
    <div class="navbar__right">
      <CustomSelect
        v-model="localCity"
        :options="cities"
        icon="mdi-map-marker"
        placeholder="Choose city"
        @update:modelValue="toLocal"
      />
      <CustomButton variant="outline" icon="mdi-phone" @click="makeCall('+998997777777')">
        Contact us
      </CustomButton>
      <CustomButton variant="secondary" icon="mdi-car-key" @click="showDialog = !showDialog">
        Test drive
      </CustomButton>
    </div>
    <TestDriveForm :isOpened="showDialog" @close="showDialog = false" />
  </header>
</template>

<style lang="scss" scoped>
$color-primary: rgb(30, 70, 84);
$color-border: rgb(226, 232, 240);
$color-text-muted: rgb(100, 116, 139);
$shadow: 0 1px 3px rgb(15, 23, 42, 0.08);
$white: rgb(250, 250, 250);
$border: rgb(229, 231, 235);

$header-height: 60px;

.navbar {
  position: sticky;
  top: 0;
  z-index: 212;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  padding: 0 24px;
  background-color: $white;
  border-bottom: 1px solid $border;
  box-sizing: border-box;
  gap: 10px;

  &__logo {
    font-size: 18px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    text-decoration: none;
  }

  &__right {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  p {
    color: black;
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    &__row {
      display: flex;
      justify-content: center;
    }

    &__actions {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
  }
}
</style>