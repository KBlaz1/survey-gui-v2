<template>
  <v-radio-group>
    <v-row
      v-for="choice in choices"
      :key="choice.choiceID.uuid"
    >
      <v-col>
        <v-radio
          :label="choice.label"
          :value="choice.label"
        />
      </v-col>
    </v-row>
  </v-radio-group>
</template>

<script>
export default {
  name: "RadioButtonQuestion",
  props: {
    choices: {
      type: [Array, Object],
      default: () => [],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
