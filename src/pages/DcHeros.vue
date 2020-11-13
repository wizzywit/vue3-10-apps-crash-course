<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
    <ul>
      <li class="flex justify-between" v-for="(hero,index) in dcHeros" :key="hero.name">
        <p>{{hero.name}} 
          </p>
          <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
       class="border rounded" 
       type="text" 
       v-model.lazy.trim="newHero" 
       placeholder="Type Hero name here"
       ref="newHeroRef"
       />
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
    </form>
    <small>Total Heros in the list is {{ herosCount }}</small>
  </div>
</template>

<script>
export default {data(){
    return {
      isDisabled: true,
      newHero: "",
      fname: "Sarthak",
      lname: "Shna",
      dcHeros: [
        { name:'superGirl' }, 
        { name:'Flash' }, 
        { name:'Batman' },
        ]
    }
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  },
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
  methods: {
    addHero(){
      if(this.newHero !== ""){
        this.dcHeros.unshift({name: this.newHero});
        this.newHero = '';
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index)
    }
  }

}
</script>

<style>

</style>