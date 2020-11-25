<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right h-10 mt-10 w-40 overflow-x-scroll"
        style="direction:rtl"
      >
        {{ currentNumber }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNumber }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button
          @click="buttonPressed('1')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          1
        </button>
        <button
          @click="buttonPressed('2')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          2
        </button>
        <button
          @click="buttonPressed('3')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          3
        </button>
        <button
          @click="buttonPressed('+')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          +
        </button>
        <button
          @click="buttonPressed('4')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          4
        </button>
        <button
          @click="buttonPressed('5')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          5
        </button>
        <button
          @click="buttonPressed('6')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          6
        </button>
        <button
          @click="buttonPressed('-')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          -
        </button>
        <button
          @click="buttonPressed('7')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          7
        </button>
        <button
          @click="buttonPressed('8')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          8
        </button>
        <button
          @click="buttonPressed('9')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          9
        </button>
        <button
          @click="buttonPressed('*')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          *
        </button>
        <button
          @click="buttonPressed('C')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          CL
        </button>
        <button
          @click="buttonPressed('0')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          0
        </button>
        <button
          @click="buttonPressed('=')"
          class="p-2 border rounded h-10 shadow w-10"
        >
          =
        </button>
        <button
          @click="buttonPressed('/')"
          class="p-2 border rounded w-10 h-10 shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const currentNumber = ref("");
    const operations = ["+", "-", "*", "/"];
    const prevNum = ref("");
    const selectedOperation = ref("");
    function buttonPressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "C" || value === "Backspace") clearDisplay();
      else if (operations.includes(value)) applyOperation(value);
      else if (parseInt(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentNumber.value = currentNumber.value + value;
    }
    const clearDisplay = () => {
      let display = Array.from(currentNumber.value);
      display.pop();
      currentNumber.value = display.join("");
    }
    function applyOperation(value) {
      calculate();
      prevNum.value = currentNumber.value;
      currentNumber.value = "";
      selectedOperation.value = value;
      return value;
    }
    function calculate() {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "+") sum();
      prevNum.value = "";
      selectedOperation.value = "";
    }

    function multiply() {
      currentNumber.value = +prevNum.value * +currentNumber.value;
    }
    function divide() {
      currentNumber.value = +prevNum.value / +currentNumber.value;
    }
    function subtract() {
      currentNumber.value = +prevNum.value - +currentNumber.value;
    }
    function sum() {
      currentNumber.value = +prevNum.value + +currentNumber.value;
    }
    const handleKeydown = (e) => {
      buttonPressed(e.key);
    };
    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
    return { currentNumber, buttonPressed, prevNum, selectedOperation };
  },
};
</script>

<style></style>
