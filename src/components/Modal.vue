<template>
  <section
    class="h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50 z-20"
    @click="close"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class=" z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
            <h1 class="text-2xl text-center">
                <slot name="title"></slot>
            </h1>
            <main>
                <slot name="body"></slot>
            </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style></style>
