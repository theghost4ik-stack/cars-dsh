<script setup>
defineProps({
    label: {
        type: String,
        default: 'Form'
    },
    isOpened: {
        type: Boolean,
        required: true
    },
})
</script>

<template>
    <div v-if="isOpened" class="form-container">
        <div class="form-container__box">
            <h1>{{ label }}</h1>
            <slot/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    z-index: 222;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.6);

    &__box {
        background-color: rgb(250, 250, 250);
        padding: 30px;
        min-width: 600px;
        border-radius: 12px;
        gap: 10px;

        h1 {
            margin-bottom: 10px;
        }
    }
}
</style>