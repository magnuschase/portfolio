<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="faded">
        <b-navbar-toggle target="nav-collapse" class="ml-auto">
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item @click="admin()" class="text-center">admin</b-nav-item>
            <b-nav-item @click="renderMain()" class="text-center">
              main
            </b-nav-item>
            <b-nav-item-dropdown text="info" class="text-center" right>
              <b-dropdown-item @click="renderContact()" class="text-center">
                kontakt
              </b-dropdown-item>
              <b-dropdown-item
                href="https://www.linkedin.com/in/jakub-kapa%C5%82a-72b545200/"
                class="text-center"
              >
                linkedin
              </b-dropdown-item>
              <b-dropdown-item @click="renderAbout()" class="text-center">
                about me
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid id="mainBox">
      <transition name="fade" mode="out-in">
        <component :is="this.$store.state.currentComponent" />
      </transition>
    </b-container>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Tools from "./components/Tools.vue";
import Admin from "./components/Admin.vue";

export default {
  name: "App",
  components: { Main, Contact, About, Projects, Tools, Admin },
  methods: {
    admin: function () {
      this.$store.commit("CHANGE_COMPONENT", "Admin");
    },
    renderMain: function () {
      this.$store.commit("CHANGE_COMPONENT", "Main");
    },
    renderContact: function () {
      this.$store.commit("CHANGE_COMPONENT", "Contact");
    },
    renderAbout: function () {
      this.$store.commit("CHANGE_COMPONENT", "About");
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
