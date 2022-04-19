<template>
  <div
    style="height: 100vh"
  >
    <input-create survey-intro />
  </div>
</template>

<script>
import InputCreate from "~/components/create/InputCreate.vue"
export default {
  name: "CreatePage",
  components: { InputCreate },
  layout: "surveyLayout"
}
</script>
