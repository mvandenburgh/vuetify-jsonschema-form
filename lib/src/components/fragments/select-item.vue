<script setup>
// cf https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSelect/VSelect.tsx#L374

import { VCheckboxBtn } from 'vuetify/components/VCheckbox'
import { VListItem } from 'vuetify/components/VList'
import VSelectItemIcon from './select-item-icon.vue'

defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  itemProps: {
    type: Object,
    required: true
  },
  item: {
    /** @type import('vue').PropType<import('@json-layout/vocabulary').SelectItem> */
    type: Object,
    required: true
  },
  avatarProps: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-list-item v-bind="itemProps">
    <template
      v-if="item.icon || multiple"
      #prepend="{isSelected}"
    >
      <v-checkbox-btn
        v-if="multiple"
        :key="item.key"
        :ripple="false"
        tabindex="-1"
        :model-value="isSelected"
      />
      <v-select-item-icon
        v-if="item.icon"
        :icon="item.icon"
        :avatar-props="avatarProps"
      />
    </template>
  </v-list-item>
</template>
