<template>
  <q-item v-ripple tag="label">
    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-toggle
        v-model="status.active"
        :color="color"
        checked-icon="check"
        unchecked-icon="clear"
      />
    </q-item-section>
  </q-item>
</template>

<script lange="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SubItem',
  props: {
    active: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  emits: ['update:active'],

  setup(props, { emit }) {
    const status = computed({
      get: () => props.active,
      set: (value) => emit('update:active', value),
    });

    return {
      status,
    };
  },
});
</script>
