<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
    <!-- <DcHeros/> -->
    <!-- <Calender /> -->
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log("User available");
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        // No user is signed in.
        this.isLoggedIn = false;
        this.authUser = {};
        console.log("No user");
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>

<style></style>
