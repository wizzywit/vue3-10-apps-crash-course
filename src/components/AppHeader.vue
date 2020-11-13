<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link class="mx-2" v-for="item in list" :key="item.to" :to="item.to">{{ item.title }}</router-link>
        <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
        <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>
    </nav>
</template>

<script>
import firebase from '../utilities/firebase';
export default {
    props: {"isLoggedIn": {type: String, required: true}},
    data(){
        return {
            list: [
                { title: "Dc Heros", to:"/dc-heros" },
                { title: "Calender", to:"/calender" },
                { title: "Markdown", to:"/markdown" },
                { title: "Slider Carousel", to:"/slider" },
                ]
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
            console.log('Logged out');
            }).catch((error) => {
            console.log(error);
            });
        }
    }
}
</script>

<style>

</style>