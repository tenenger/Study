<script setup>
// input의 value와 연동하려면, ref를 이용한다.
// 반응성 있는 변수 사용시 ref 함수 사용한다.
import { ref } from "vue";

// 반응성 있는 배열이나 객체 사용시 reactive 함수를 사용한다.
import { reactive, computed, watch, watchEffect } from "vue";

// v-if 조건문
const count = ref(0);
const onMinus = () => {
    count.value -= 1;
};

// v-for 반복문
const arr = reactive({
    1: "1번 객체",
    2: "2번 객체",
    3: "3번 객체",
    4: "4번 객체",
    5: "5번 객체",
});

// computed 속성
const arr1 = reactive([
    { id: 1, text: "1번 아이템" },
    { id: 2, text: "2번 아이템" },
    { id: 3, text: "3번 아이템" },
    { id: 4, text: "4번 아이템" },
    { id: 5, text: "5번 아이템" },
]);
const smallItems = computed(() => {
    return arr1.filter((item) => item.id <= 3);
});

// watch 함수, ref함수로 0을 받을때 실행X, 변하기 전의 값과 변한 후의 값을 가진다.
// watchEffect 함수처럼 ref 0을 받을때 실행되게 immediate 옵션을 true로 하면 된다. 초기 대입값부터 감시하게된다.
const number = ref(0);
watch(
    // 만약 감시하고자 하는 변수가 여러개일 경우, 배열로 넣으면 된다.[number, number] 배열을 넣을경우 deep 옵션을 추가하고, true값을 주어야하는데, 이유는 배열이 메모리를 가리키기 때문에, 배열안의 값이 변경되도 메모리는 변하지 않아 감지가 안되기 때문이다. {deep: true}
    number,
    (newnumber, oldnumber) => {
        console.log(newnumber, oldnumber);
    },
    { immediate: true }
);

// watchEffect 함수, ref함수로 0을 받을때 실행, 값이 변할때 변한된 값을 가진다. 즉 초기 대입값부터 감시한다. react의 useEffect와 유사한듯
// 리덕스의 subscribe처럼 중지시킬 수 있다.
// watchEffect는 flush 옵션이 존재한다. pre와 post 값을 가지는데, 기본으로 pre를 가진다. pre는 DOM 업데이터 전에 콜백함수를 호출하고, post는 DOM 업데이트 후에 콜백함수를 호출한다.
const stop = watchEffect(() => {
    console.log(number.value);
});
</script>

<template>
    <!-- v-if 조건문 -->
    <p>{{ count }}</p>
    <p v-if="count > 5">5보다 큽니다.</p>
    <p v-else>5보다 큽니다.</p>

    <!-- v-show 조건문은 해당 조건만 화면에 표시되고, 조건 불충족이면 hide된다. -->
    <p v-show="count > 5">5보다 큽니다.</p>
    <button @click="count++">+</button>
    <button @click="onMinus">-</button>

    <!-- v-for 반복문, 반복문 사용시 element에 key 값을 넣어줘야한다. -->
    <div>
        <ol>
            <li v-for="(value, key, idx) in arr" v-bind:key="idx">
                {{ value }}
            </li>
        </ol>
    </div>

    <!-- computed 속성 사용, key값을 넣어주는 생략버전이다. -->
    <p v-for="item in smallItems" :key="item.id">{{ item.text }}</p>

    <!-- watch함수와 watchEffect 함수 사용 -->
    <button @click="number++">+</button>
    <button @click="stop">watchEffect 중지</button>
</template>

<style scoped></style>
