<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-usable Modal</h1>
      <Modal v-if="isModalOpen" @close="isModalOpen = false" >
        <template #title>
          Red Modal
        </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </Modal>
      <button @click="isModalOpen = true" class="border rounded px-2 mx-4 bg-blue-500 text-white">Open Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    return { isModalOpen };
  },
};
</script>

<style></style>
