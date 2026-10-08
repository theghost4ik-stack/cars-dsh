<script setup>
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import CustomField from '@/components/ui/CustomField.vue';
import CustomForm from '@/components/ui/CustomForm.vue';
import { dealership } from '@/data/cars';
import { ref, computed } from 'vue';

defineProps({
    isOpened: {
        type: Boolean,
        required: true
    },
})
const emit = defineEmits(['close'])

const name = ref('')
const number = ref('')
const isDone = ref(false)

const carTypeSelection = ref(null)
const carBrandSelection = ref(null)
const carModelSelection = ref(null)

const bodyTypeOptions = computed(() =>
  dealership.bodyTypes.map((type) => ({
    value: type.id,
    label: type.name
  }))
)


function getBrandOptions(typeId) {
  if (!typeId) return []

  const type = dealership.bodyTypes.find((t) => t.id === typeId)
  if (!type) return []

  return type.brands.map((brand) => ({
    value: brand.id,
    label: brand.name
  }))
}

function getModelOptions(typeId, brandId) {
  const type = dealership.bodyTypes.find((t) => t.id === typeId)
  if (!type) return []

  const brand = type.brands.find((b) => b.id === brandId)
  if (!brand) return []
 
  return brand.models.map((model) => ({
    value: model.id,
    label: model.name
  }))
}

function notFilled() {
    if (name.value && number.value && carTypeSelection.value && carBrandSelection.value && carModelSelection.value) {
        return false
    }
    return true
}

function confirmData() {
    isDone.value = true
    saveData()
    setTimeout(() => {
        isDone.value = false
        clearFields()
    }, 3000)
}

function clearFields() {
    name.value = ''
    number.value = ''

    carTypeSelection.value = null
    carBrandSelection.value = null
    carModelSelection.value = null
    emit('close')
}

function saveData() {

}
</script>

<template>
    <CustomForm v-if="isOpened":isOpened="isOpened" label="Request a test drive">
        <div v-if="!isDone" class="form-fields">
            <div class="form-fields__row">
                <CustomField v-model="name" placeholder="Input name" labelTitle="Name" @input="notFilled"/>
                <CustomField v-model="number" placeholder="Input phone number" labelTitle="Phone" @input="notFilled" phone/>
            </div>
            <div class="form-fields__selections">
                <CustomSelect
                    v-model="carTypeSelection"
                    :options="bodyTypeOptions"
                    icon="mdi-car-outline"
                    placeholder="Choose body type"
                    @update:modelValue="notFilled"
                />
                <CustomSelect
                    v-if="carTypeSelection"
                    v-model="carBrandSelection"
                    :options="getBrandOptions(carTypeSelection)"
                    icon="mdi-tag-outline"
                    placeholder="Choose brand"
                    @update:modelValue="notFilled"
                />
                <CustomSelect
                    v-if="carBrandSelection"
                    v-model="carModelSelection"
                    :options="getModelOptions(carTypeSelection, carBrandSelection)"
                    icon="mdi-car-info"
                    placeholder="Choose model"
                    @update:modelValue="notFilled"
                />
            </div>
            <div class="form-fields__actions">
                <CustomButton :disabled="notFilled()" @click="confirmData">Confirm</CustomButton>
                <CustomButton @click="clearFields" variant="secondary">Close</CustomButton>
            </div>
        </div>
        <div v-else class="form-fields__msg">
            <i class="mdi mdi-check-circle form-fields__msg-icon"></i>
            <span>Thank you for your request!</span>
            <span>We will recall you as soon as possible.</span>
        </div>
    </CustomForm>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);
.form-fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    &__row {
      display: flex;
      justify-content: start;
    }

    &__selections {
        display: flex;
        justify-content: start;
        gap: 10px;
        margin-bottom: 10px;
    }

    &__actions {
        display: flex;
        gap: 10px;
        justify-content: start;
    }

    &__msg {
        display: flex;
        flex-direction: column;
        text-align: center;

        &-icon {
            font-size: 36px;
            color: $primary;
        }

        span {
            font-size: 18px;
        }
    }
  }
</style>