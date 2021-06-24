<template>
  <q-layout view="lHh Lpr lFf" class="constrain">
    <q-header elevated class="constrain">
      <q-toolbar>
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            color="orange"
            label="Foo"
            rounded
            :to="RoutePath.Subscriptions"
          />
        </div>
        <q-space />
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="red-9" label="Bar" rounded :to="RoutePath.Sos" />
        </div>
        <q-space />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';

// Import json content
import { RoutePath } from 'src/types/routes';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    onBeforeMount(() => {
      localStorage.setItem('userId', '222');
    });
    return { RoutePath };
  },
});
</script>

<style lang="sass">
.q-item__section--avatar
  min-width: 15px
</style>
