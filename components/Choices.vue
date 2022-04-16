<template>
  <v-container>
    <template v-if="questionType === 'RADIO_BUTTON'">
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

    <template v-if="questionType === 'CHECK_BOX'">
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
    </template>
  </v-container>
</template>

<script>
export default {
  name: "ChoicesComponent",
  props: {
    questionType: {
      type: String,
      default: "RADIO_BUTTON"
    },
    choices: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>
