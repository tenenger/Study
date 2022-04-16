<script setup>
// input의 value와 연동하려면, ref를 이용한다.
import { ref } from "vue";

// 선택사항
defineProps({
  data: String,
  value1: String,
  value2: String,
});

const data = "<h3>문자열3</h3>";
const value1 = ref("DOPT");
const value2 = ref("Dong Project Team");
const number = ref(0);
const onPlus = (e) => {
  e.preventDefault();
  number.value += 1;
};
const onMinus = (e) => {
  e.preventDefault();
  number.value -= 1;
};
</script>

<template>
  <!-- 문자열 그대로 출력 -->
  <div>{{ data }}</div>
  <div v-text="data"></div>

  <!-- HTML 마크업 형태로 출력 -->
  <div v-html="data"></div>

  <!-- 컴파일 무시 -->
  <div v-pre>{{ data }}</div>

  <!-- 데이터 결합으로 사용자 입력처리 -->
  <div>
    <input v-bind:value="value1" type="text" />
    <input v-model="value2" type="text" />
  </div>
  <div>
    {{ value1 }}
    {{ value2 }}
  </div>
  <div>
    <div v-bind:title="value2">{{ value1 }}</div>
  </div>

  <!-- 이벤트 리스터로 사용자 입력처리 -->
  <button @click="onPlus">Up</button>
  <button @click="onMinus">Down</button>
  <div>{{ number }}</div>
</template>

<style scoped>
</style>
