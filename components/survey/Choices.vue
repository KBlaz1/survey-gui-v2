<template>
  <v-container>
    <template v-if="questionType === 'RADIO_BUTTON'">
      <radio-button :choices="choices" />
    </template>

    <template v-if="questionType === 'CHECK_BOX'">
      <check-box :choices="choices" />
    </template>
  </v-container>
</template>

<script>
import CheckBox from "./questionTypes/CheckBox.vue"
import RadioButton from "./questionTypes/RadioButton.vue"
export default {
  name: "ChoicesComponent",
  components: { RadioButton, CheckBox },
  props: {
    questionType: {
      type: String,
      default: "RADIO_BUTTON",
      required: true
    },
    choices: {
      type: [Array, Object],
      default: () => [],
      required: true
    }
  }
}
</script>
