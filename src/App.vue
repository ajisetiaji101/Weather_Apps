<template>
  <div class=" flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <router-view v-slot="{ Component }" class="flex-1">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>