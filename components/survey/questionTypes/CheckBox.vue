<template>
  <div>
    <v-row
      v-for="choice in choices"
      :key="choice.choiceID.uuid"
      no-gutters
    >
      <v-col>
        <v-checkbox
          multiple
          dense
          :label="choice.label"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CheckBoxQuestion",
  props: {
    choices: {
      type: [Array, Object],
      default: () => [],
      required: true
    }
  }
}
</script>
