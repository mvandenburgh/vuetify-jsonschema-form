<script>
import { defineComponent, h, computed, toRef } from 'vue'
import { VCombobox } from 'vuetify/components/VCombobox'
import useNode from '../../composables/use-node.js'
import useGetItems from '../../composables/use-get-items.js'
import { useDefaults } from 'vuetify'

export default defineComponent({
  props: {
    modelValue: {
      /** @type import('vue').PropType<import('../../types.js').VjsfComboboxNode> */
      type: Object,
      required: true
    },
    statefulLayout: {
      /** @type import('vue').PropType<import('../../types.js').VjsfStatefulLayout> */
      type: Object,
      required: true
    }
  },
  setup (props) {
    useDefaults({}, 'VjsfCombobox')

    const nodeRef = toRef(props, 'modelValue')
    const getItems = useGetItems(nodeRef, props.statefulLayout)
    const { inputProps, compSlots, localData, layout, options } = useNode(nodeRef, props.statefulLayout)

    const fieldProps = computed(() => {
      const fieldProps = { ...inputProps.value }
      fieldProps.returnObject = false
      if (options.value.readOnly) {
        fieldProps.menuProps = { modelValue: false }
      } else {
        // vuetify zIndex stacking is buggy (for example https://github.com/vuetifyjs/vuetify/issues/16251)
        fieldProps.menuProps = { zIndex: 3000 }
      }
      if (getItems.hasItems.value) {
        fieldProps.items = getItems.items.value
        fieldProps.loading = getItems.loading.value
      }
      if (layout.value.multiple) {
        fieldProps.multiple = true
        fieldProps.chips = true
        fieldProps.closableChips = true
      }
      return fieldProps
    })

    // @ts-ignore
    return () => h(VCombobox, { ...fieldProps.value, modelValue: localData.value }, compSlots.value)
  }
})

</script>
