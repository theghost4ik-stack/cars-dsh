<script setup>
const props = defineProps({
    phone: { type: Boolean, default: false },
    labelTitle: { type: String, default: 'Field' },
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: 'Input information' }
})


const emit = defineEmits([
    'update:modelValue'
])

function onInput(event) {
    let value = event.target.value

    if (props.phone && value.length > 0) {
        let arr = value.split('')
        if (arr[arr.length - 1] === ' ' || !isFinite(arr[arr.length - 1])) {
            arr.pop()
            value = arr.join('')
            event.target.value = value
        }
    }

    emit('update:modelValue', value)
}
</script>

<template>
    <div class="custom-input">
        <label for="custom">{{ labelTitle }}</label>
        <input
            name="custom"
            :value="modelValue"
            :placeholder="placeholder"
            @input="onInput"
        >
    </div>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);;

.custom-input {
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;

    input {
        border: 1px solid transparent;
        padding: 8px 14px;
        border: 1px solid rgb(220, 223, 228);
        border-radius: 12px;

        &:focus {
            outline: none;
            border-color: $primary;
        }
    }
}
</style>