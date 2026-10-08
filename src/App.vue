<script setup>
import Navbar from '@/layout/Navbar.vue';
import Sidebar from '@/layout/Sidebar.vue';
</script>

<template>
  <v-app>
    <v-main>
      <div class="app-layout">
        <Sidebar />

        <main class="app-layout__content">
          <Navbar />

          <div class="app-layout__page">
            <router-view />
          </div>
        </main>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  background-color: rgb(245, 247, 250);

  &__content {
    flex: 1;
    min-width: 0;
  }
}
</style>