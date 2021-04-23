<template>
  <div>
    <b-row class="mb-4">
      <b-col class="d-flex align-items-center justify-content-center">
        <img src="./../assets/logo.svg" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <p>e-mail: jakub@kapala.xyz</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <p>tel: +48 536 167 895</p>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.mt-7
  margin-top: 7vh
</style>