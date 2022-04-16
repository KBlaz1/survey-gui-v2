<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group>
        <template v-for="(item, index) in surveys">
          <v-list-item
            :key="item.surveyID.uuid"
            :to="'survey/' + item.surveyID.uuid"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
              <v-list-item-subtitle
                class="text--primary"
                v-text="item.description"
              />
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < surveys.length - 1"
            :key="index"
          />
        </template>
      </v-list-item-group>
    </v-list>

    <div class="text-center">
      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :length="totalPages"
        @input="onPageChange"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "BrowsePage",

  data () {
    return {
      surveys: [],
      totalElements: 0,
      totalPages: 0,
      pageSize: 10,
      currentPage: 1
    }
  },

  async created () {
    await this.getPaginatedSurveys(1, this.pageSize)
  },

  methods: {
    async getPaginatedSurveys (page, size) {
      const response = await this.$axios.get("/survey", {
        params: { page, size }
      })
      this.surveys = response.data
      this.totalElements = Number(response.headers["pagination-totalelements"])
      this.totalPages = Number(response.headers["pagination-totalpages"])
    },

    async onPageChange (page) {
      await this.getPaginatedSurveys(page, this.pageSize)
    }
  }
}
</script>
