<template>
  <div>
    <b-row class="d-none d-md-block">
      <b-col class="d-flex align-items-center justify-content-center"
        ><p class="myName">JAKUB KAPAŁA</p></b-col
      >
    </b-row>
    <b-row class="mb-4">
      <b-col class="d-flex align-items-center justify-content-center">
        <img src="./../assets/logo.svg" />
      </b-col>
    </b-row>
    <b-row class="d-block d-md-none mb-4">
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
    <b-row>
      <b-col md="4" class="d-flex align-items-center justify-content-center">
        <a class="myMenu" @click="renderProjects()">projects</a>
      </b-col>
      <b-col md="4" class="d-flex align-items-center justify-content-center">
        <a href="https://github.com/magnuschase" class="myMenu">github</a>
      </b-col>
      <b-col md="4" class="d-flex align-items-center justify-content-center">
        <a class="myMenu" @click="renderTools()">tools</a>
      </b-col>
    </b-row>
    <b-row class="d-none d-md-block mt-7">
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
  </div>
</template>

<script>
export default {
  methods: {
    renderProjects: function () {
      this.$store.commit("CHANGE_COMPONENT", "Projects");
    },
    renderTools: function () {
      this.$store.commit("CHANGE_COMPONENT", "Tools");
    },
  },
};
</script>

<style lang="sass" scoped>
$light: #FAEBD7
.mt-7
    margin-top: 7vh

.myName
    font-family: Courier
    font-size: 50px
    font-style: normal
    font-weight: 400
    line-height: 57px
    letter-spacing: 0em
    text-align: center
    color: #FAEBD7

.myMenu
    font-family: Courier
    font-size: 4vw
    font-style: normal
    font-weight: 700
    line-height: 84px
    letter-spacing: 0em
    text-align: center
    @media (max-width: 770px)
        margin-top: 50px
        font-size: 10vw
    @media (max-width: 600)
        margin-top: 0px
a:hover
    text-decoration: none
    color: $light
    cursor: pointer
</style>
