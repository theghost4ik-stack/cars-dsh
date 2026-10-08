<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { dealership } from '@/data/cars';

const STORAGE_KEY = 'sidebar-state';

const route = useRoute();
const router = useRouter();

const savedState = loadState();

const isCollapsed = ref(savedState.isCollapsed);
const openTypes = ref(savedState.openTypes);

function loadState() {
  const defaults = { isCollapsed: true, openTypes: [] };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;

    const parsed = JSON.parse(raw);
    const validIds = dealership.bodyTypes.map((type) => type.id);

    return {
      isCollapsed: parsed.isCollapsed === true,
      openTypes: Array.isArray(parsed.openTypes)
        ? parsed.openTypes.filter((id) => validIds.includes(id))
        : []
    };
  } catch {
    return defaults;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      isCollapsed: isCollapsed.value,
      openTypes: openTypes.value
    }));
  } catch {
  }
}

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
  saveState();
}

function collapseAll() {
  openTypes.value = [];
  saveState();
}

function isOpen(typeId) {
  return openTypes.value.includes(typeId);
}

function toggleType(typeId) {
  if (isCollapsed.value) {
    router.push({ name: 'catalog', params: { bodyType: typeId } });
    return;
  }

  if (isOpen(typeId)) {
    openTypes.value = openTypes.value.filter((id) => id !== typeId);
  } else {
    openTypes.value.push(typeId);
  }

  saveState();
}

function countModels(type) {
  return type.brands.reduce((sum, brand) => sum + brand.models.length, 0);
}

watch(
  () => route.params.bodyType,
  (typeId) => {
    if (typeId && !isOpen(typeId)) {
      openTypes.value.push(typeId);
    }
  },
  { immediate: true }
);
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">
    <div class="sidebar__header">
      <span v-if="!isCollapsed" class="sidebar__title">Catalog</span>

      <div class="sidebar__actions">
        <button
          v-if="!isCollapsed"
          type="button"
          class="sidebar__icon-btn"
          title="Collapse all lists"
          aria-label="Collapse all lists"
          :disabled="!openTypes.length"
          @click="collapseAll"
        >
          <i class="mdi mdi-collapse-all-outline"></i>
        </button>

        <button
          type="button"
          class="sidebar__icon-btn"
          :title="isCollapsed ? 'Expand menu' : 'Collapse menu'"
          :aria-label="isCollapsed ? 'Expand menu' : 'Collapse menu'"
          :aria-expanded="!isCollapsed"
          @click="toggleSidebar"
        >
          <i class="mdi" :class="isCollapsed ? 'mdi-chevron-double-right' : 'mdi-chevron-double-left'"></i>
        </button>
      </div>
    </div>

    <nav class="sidebar__nav">
      <div class="sidebar__main">
        <router-link
          :to="{ name: 'main' }"
          class="sidebar__type"
          exact-active-class="sidebar__type--active"
          title="Main"
          aria-label="Main"
        >
          <span class="sidebar__type-icon">
            <i class="mdi mdi-home-outline"></i>
          </span>
          <span v-if="!isCollapsed" class="sidebar__type-name">Main</span>
        </router-link>

        <router-link
          :to="{ name: 'comparison' }"
          class="sidebar__type"
          exact-active-class="sidebar__type--active"
          title="Comparison"
          aria-label="Comparison"
        >
          <span class="sidebar__type-icon">
            <i class="mdi mdi-compare-horizontal"></i>
          </span>
          <span v-if="!isCollapsed" class="sidebar__type-name">Comparison</span>
        </router-link>
      </div>
      <div v-for="type in dealership.bodyTypes" :key="type.id" class="sidebar__group">
        <button
          type="button"
          class="sidebar__type"
          :class="{ 'sidebar__type--active': route.params.bodyType === type.id }"
          :title="type.name"
          :aria-expanded="isOpen(type.id)"
          @click="toggleType(type.id)"
        >
          <span class="sidebar__type-icon">
            <i class="mdi" :class="type.icon"></i>
          </span>
          <template v-if="!isCollapsed">
            <span class="sidebar__type-name">{{ type.name }}</span>
            <span class="sidebar__badge">{{ countModels(type) }}</span>
            <i
              class="mdi mdi-chevron-down sidebar__chevron"
              :class="{ 'sidebar__chevron--open': isOpen(type.id) }"
            ></i>
          </template>
        </button>

        <Transition name="sidebar-expand">
          <div v-if="isOpen(type.id) && !isCollapsed" class="sidebar__brands">
            <router-link
              :to="{ name: 'catalog', params: { bodyType: type.id } }"
              class="sidebar__item"
              exact-active-class="sidebar__item--active"
            >
              <span class="sidebar__item-name">All brands</span>
            </router-link>

            <router-link
              v-for="brand in type.brands"
              :key="brand.id"
              :to="{ name: 'catalog', params: { bodyType: type.id, brand: brand.id } }"
              class="sidebar__item"
              exact-active-class="sidebar__item--active"
            >
              <span class="sidebar__item-name">{{ brand.name }}</span>
              <span class="sidebar__count">{{ brand.models.length }}</span>
            </router-link>
          </div>
        </Transition>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
$primary: rgb(200, 16, 46);
$primary-soft: rgba(200, 16, 46, 0.08);
$text: rgb(22, 24, 29);
$muted: rgb(120, 125, 135);
$border: rgb(229, 231, 235);
$hover-bg: rgb(242, 243, 245);
$white: rgb(250, 250, 250);
$badge-active-bg: rgb(255, 255, 255);

$header-height: 60px;
$icon-size: 24px;
$row-padding: 10px;

.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 260px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: $white;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  z-index: 111;

  &--collapsed {
    width: 72px;

    .sidebar__header {
      justify-content: center;
      padding: 0 12px;
    }

    .sidebar__type {
      justify-content: center;
      padding: 0;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-shrink: 0;
    height: $header-height;
    padding: 0 12px 0 22px;
    border-bottom: 1px solid $border;
  }

  &__title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $muted;
    white-space: nowrap;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: $muted;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover:not(:disabled) {
      background: $hover-bg;
      color: $text;
    }

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-height: 0;
    padding: 12px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__type {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 40px;
    padding: 0 $row-padding;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    background: transparent;
    color: $text;
    font: inherit;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      background: $hover-bg;
    }

    &--active {
      background: $primary-soft;
      color: $primary;
      font-weight: 600;

      .sidebar__badge {
        background: $badge-active-bg;
        color: $primary;
      }
    }
  }

  &__type-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: $icon-size;
    font-size: 20px;
  }

  &__type-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__badge {
    min-width: 24px;
    padding: 1px 7px;
    border-radius: 10px;
    background: $hover-bg;
    color: $muted;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  &__chevron {
    color: $muted;
    font-size: 18px;
    transition: transform 0.15s ease-in-out;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__brands {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 2px 0 6px ($row-padding + $icon-size * 0.5);
    padding-left: 12px;
    border-left: 1px solid $border;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 34px;
    padding: 0 10px;
    border-radius: 6px;
    color: $muted;
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    &--active {
      background: $primary-soft;
      color: $primary;
      font-weight: 500;

      .sidebar__count {
        color: $primary;
      }
    }
  }

  &__item-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__count {
    font-size: 12px;
    color: $muted;
    font-variant-numeric: tabular-nums;
  }

  &__type,
  &__item,
  &__icon-btn {
    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 2px;
    }
  }
}
</style>