<template>
  <section
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
    @click="close"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class=" z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-xl text-center">
            Login
          </h1>
          <GoogleLogin @close-login-from-google="close" />
          <p class="text-center my-3">Or</p>
          <form @submit.prevent="submit" class="p-2 my-2">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                v-model="form.email"
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
                ref="emailRef"
              />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input
                v-model="form.password"
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your password"
              />
            </div>
            <div class="my-4">
              <button
                class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>⌛</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./Login/GoogleLogin";
export default {
  components: { GoogleLogin },
  data() {
    return {
      form: {
        email: "wisdompraise968@gmail.com",
        password: "password",
      },
      isLoading: false,   
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .catch(function(error) {
          console.log(error);
          this.isLoading = false;
        })
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.form.email = "";
          this.form.password = "";
          this.close();
        });
    },
    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style></style>
