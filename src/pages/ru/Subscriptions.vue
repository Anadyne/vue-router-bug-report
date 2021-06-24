<template>
  <q-page padding>
    <div class="q-pt-lg text-h6 text-center text-primary">
      Подписка на сервисы
    </div>
    <div class="q-pa-md">
      <SubItem
        v-for="(item, idx) in entries"
        :key="item.id"
        :active="isActive[idx]"
        :label="item.label"
        :caption="item.caption"
        :color="item.color"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  onBeforeMount,
  onBeforeUnmount,
  reactive,
} from 'vue';
import grpcSubService from 'src/hooks/grpc/grpcSubService';
import * as entries from 'assets/content/subItems.json';
import { ActT, SubT } from 'src/types/types';

export default defineComponent({
  name: 'Subscriptions',

  components: {
    SubItem: defineAsyncComponent(() => import('components/SubItem.vue')),
  },

  setup() {
    const { Sub } = grpcSubService();
    const subLength = entries.length;
    const sub = new Sub();
    let activeSubs = Array<SubT>();

    const isActive = reactive(Array<ActT>());

    onBeforeMount(async () => {
      // Read currently active subscriptions
      activeSubs = await sub.getSubs();
      for (let i = 0; i < subLength; i++) {
        const curr = activeSubs.includes(entries[i].id);
        isActive.push({ active: curr });
      }
    });

    onBeforeUnmount(async () => {
      // Select values with active state
      const activeNow = Array<SubT>();
      isActive.map((el, idx) => {
        if (el.active) activeNow.push(entries[idx].id);
      });

      // Save current subscriptions to DB
      if (activeNow.length > 0) await sub.updSubs(activeNow);
    });

    return { entries, isActive };
  },
});
</script>
