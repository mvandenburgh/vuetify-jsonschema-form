"use strict";var Vjsf=(()=>{var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var u=(o,e)=>{for(var r in e)s(o,r,{get:e[r],enumerable:!0})},a=(o,e,r,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of c(e))!l.call(o,t)&&t!==r&&s(o,t,{get:()=>e[t],enumerable:!(d=m(e,t))||d.enumerable});return o};var f=o=>a(s({},"__esModule",{value:!0}),o);var b={};u(b,{Vjsf:()=>i,default:()=>v,defaultIcons:()=>p,defaultOptions:()=>n});var i=`<script setup>
import { computed } from 'vue'

import { compile } from '@json-layout/core'
import Tree from './tree.vue'
import { useVjsf, emits } from '../composables/use-vjsf.js'
import '../styles/vjsf.css'

import NodeSection from './nodes/section.vue'
import NodeTextField from './nodes/text-field.vue'
import NodeTextarea from './nodes/textarea.vue'
import NodeCheckbox from './nodes/checkbox.vue'
import NodeSwitch from './nodes/switch.vue'
import NodeNumberField from './nodes/number-field.vue'
import NodeSlider from './nodes/slider.vue'
import NodeDatePicker from './nodes/date-picker.vue'
import NodeTimePicker from './nodes/time-picker.vue'
import NodeDateTimePicker from './nodes/date-time-picker.vue'
import NodeColorPicker from './nodes/color-picker.vue'
import NodeSelect from './nodes/select.vue'
import NodeAutocomplete from './nodes/autocomplete.vue'
import NodeRadioGroup from './nodes/radio-group.vue'
import NodeCheckboxGroup from './nodes/checkbox-group.vue'
import NodeSwitchGroup from './nodes/switch-group.vue'
import NodeOneOfSelect from './nodes/one-of-select.vue'
import NodeTabs from './nodes/tabs.vue'
import NodeVerticalTabs from './nodes/vertical-tabs.vue'
import NodeCombobox from './nodes/combobox.vue'
import NodeNumberCombobox from './nodes/number-combobox.vue'
import NodeExpansionPanels from './nodes/expansion-panels.vue'
import NodeStepper from './nodes/stepper.vue'
import NodeList from './nodes/list.vue'
import NodeFileInput from './nodes/file-input.vue'
import NodeCard from './nodes/card.vue'

/** @type {Record<string, import('vue').Component>} */
const nodeComponents = {
  section: NodeSection,
  'text-field': NodeTextField,
  textarea: NodeTextarea,
  checkbox: NodeCheckbox,
  switch: NodeSwitch,
  'number-field': NodeNumberField,
  slider: NodeSlider,
  'date-picker': NodeDatePicker,
  'time-picker': NodeTimePicker,
  'date-time-picker': NodeDateTimePicker,
  'color-picker': NodeColorPicker,
  select: NodeSelect,
  autocomplete: NodeAutocomplete,
  'radio-group': NodeRadioGroup,
  'checkbox-group': NodeCheckboxGroup,
  'switch-group': NodeSwitchGroup,
  'one-of-select': NodeOneOfSelect,
  tabs: NodeTabs,
  'vertical-tabs': NodeVerticalTabs,
  'expansion-panels': NodeExpansionPanels,
  stepper: NodeStepper,
  list: NodeList,
  combobox: NodeCombobox,
  'number-combobox': NodeNumberCombobox,
  'file-input': NodeFileInput,
  card: NodeCard
}

const props = defineProps({
  schema: {
    type: Object,
    required: true
  },
  precompiledLayout: {
    /** @type import('vue').PropType<import('@json-layout/core').CompiledLayout> */
    type: Object,
    default: null
  },
  modelValue: {
    type: null,
    default: null
  },
  options: {
    /** @type import('vue').PropType<import('../types.js').PartialVjsfOptions | null> */
    type: Object,
    default: null
  }
})

const emit = defineEmits(emits)

const { el, statefulLayout, stateTree } = useVjsf(
  computed(() => props.schema),
  computed(() => props.modelValue),
  computed(() => props.options),
  nodeComponents,
  emit,
  compile,
  computed(() => props.precompiledLayout)
)

<\/script>

<template>
  <div
    ref="el"
    class="vjsf"
  >
    <tree
      v-if="statefulLayout && stateTree"
      :model-value="stateTree"
      :stateful-layout="statefulLayout"
    />
  </div>
</template>

<style lang="css">
/* nothing here, use ../styles/vjsf.css */
</style>
`;var p={add:"$plus",calendar:"$calendar",close:"$close",edit:"$edit",sortDown:"$sortDesc",sortUp:"$sortAsc",alert:"svg:M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",clock:"svg:M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",delete:"svg:M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",duplicate:"svg:M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z",infoSymbol:"svg:M11 9H13V7H11V9M11 17H13V11H11V17Z",menu:"svg:M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",sort:"svg:M17.45,17.55L12,23L6.55,17.55L7.96,16.14L11,19.17V4.83L7.96,7.86L6.55,6.45L12,1L17.45,6.45L16.04,7.86L13,4.83V19.17L16.04,16.14L17.45,17.55Z"},n={nodeComponents:{},plugins:[],pluginsOptions:{}};var v=i;return f(b);})();
//# sourceMappingURL=vjsf.bundle.js.map
