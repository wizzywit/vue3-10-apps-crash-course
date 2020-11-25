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
import {computed, onMounted, ref} from 'vue'
export default {
  setup(){
    const newHeroRef = ref("")
    const newHero = ref("")
    const dcHeros = ref([
        { name:'superGirl' }, 
        { name:'Flash' }, 
        { name:'Batman' },
        ]);
    const herosCount = computed({
      get: ()=> dcHeros.value.length
    })
    onMounted(()=>{
       newHeroRef.value.focus();
    })
    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index)
    }
    function addHero(){
      if(newHero.value !== ""){
        dcHeros.value.unshift({name: newHero.value});
        newHero.value = '';
      }
    }
    return {dcHeros, newHero, remove, addHero, newHeroRef, herosCount}
  }
}
</script>

<style>

</style>