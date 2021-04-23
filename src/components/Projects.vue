<template>
  <div class="projList">
    <b-row class="mb-4">
      <b-col class="d-flex align-items-center justify-content-center">
        <img src="./../assets/logo.svg" />
      </b-col>
    </b-row>
    <b-row class="d-block d-md-none mt-7">
      <b-col>
        <img
          src="./../assets/leftDark.svg"
          style="width: 150vw; position: absolute; left: -75vw"
        />
        <img
          src="./../assets/rightDark.svg"
          style="width: 53vw; position: absolute; left: 73vw"
        />
      </b-col>
    </b-row>
    <b-row class="d-none d-md-block">
      <b-col>
        <img
          src="./../assets/leftDark.svg"
          style="width: 75vw; position: absolute; left: -8px"
        />
        <img
          src="./../assets/rightDark.svg"
          style="width: 27vw; position: absolute; left: 73vw"
        />
      </b-col>
    </b-row>
    <div v-for="project in this.$store.state.projects" :key="project.id">
      <b-row class="mt-14" v-if="project.elExists">
        <b-col class="d-flex justify-content-center align-items-center">
          <div class="productBox">
            <b-row>
              <b-col class="projectTitle"> {{ project.title }}</b-col>
            </b-row>
            <b-row class="figma">
              <b-col md="5">
                <iframe
                  style="border: 1px solid rgba(0, 0, 0, 0.1)"
                  width="100%"
                  height="100%"
                  :src="project.link"
                  allowfullscreen
                >
                </iframe>
              </b-col>
              <b-col md="7" class="projectDesc">
                <b-row v-if="language">
                  <b-col>
                    {{ project.descEN }}
                  </b-col>
                </b-row>
                <b-row v-else>
                  <b-col>
                    {{ project.descPL }}
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      @click="changeLanguage('pl')"
                    >
                      PL
                    </button>
                    <button
                      class="btn btn-outline-success my-2 my-sm-0 ml-1"
                      @click="changeLanguage('eng')"
                    >
                      ENG
                    </button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <div></div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-14" v-else>
        <b-col class="d-flex justify-content-center align-items-center">
          <div class="projectBox">
            <b-row>
              <b-col class="projectTitle"> {{ project.title }}</b-col>
            </b-row>
            <b-row class="imageProject">
              <b-col md="5">
                <a :href="project.link">
                  <img
                    :src="project.img"
                    style="
                      width: 100%;
                      height: auto;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  />
                </a>
              </b-col>
              <b-col md="7" class="projectDesc">
                <b-row v-if="language">
                  <b-col>
                    {{ project.descEN }}
                  </b-col>
                </b-row>
                <b-row v-else>
                  <b-col>
                    {{ project.descPL }}
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      @click="changeLanguage('pl')"
                    >
                      PL
                    </button>
                    <button
                      class="btn btn-outline-success my-2 my-sm-0 ml-1"
                      @click="changeLanguage('eng')"
                    >
                      ENG
                    </button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <div></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.getLang;
    },
  },
  methods: {
    changeLanguage: function (val) {
      if (val == "eng") this.$store.commit("CHANGE_LANGUAGE", true);
      else this.$store.commit("CHANGE_LANGUAGE", false);
    },
  },
};
</script>

<style lang="sass" scoped>
.mt-7
  margin-top: 7vh
.mt-14
  margin-top: 14vh
.productBox
  height: 500px
  width: 60vw
.projectBox
  height: 300px
  width: 60vw
.figma
  height: 400px
  margin-top: 15px
.imageProject
  height: 290px
  margin-top: 15px
  margin-bottom: 10vh
</style>