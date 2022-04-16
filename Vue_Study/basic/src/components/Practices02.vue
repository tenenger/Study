<template>
    <!-- v-if 조건문 -->
    <p>{{ count }}</p>
    <p v-if="count > 5">5보다 큽니다.</p>
    <p v-else>5보다 작거나 같습니다.</p>

    <!-- v-show 조건문은 해당 조건만 화면에 표시되고, 조건 불충족이면 hide된다. -->
    <p v-show="count > 5">5보다 큽니다.</p>
    <button @click="count++">+</button>
    <button @click="onMinus">-</button>

    <!-- v-for 반복문, 반복문 사용시 element에 key 값을 넣어줘야한다. -->
    <div>
        <li v-for="(value, key) in arr1" :key="key">
            {{ value.text }}
        </li>
    </div>

    <!-- computed 속성 사용 v-if, v-for 디렉티브의 기능을 가져 복잡한 구현가능 -->
    <p v-for="item in smallItems" :key="item.id">{{ item.text }}</p>

    <!-- watch함수와 watchEffect 함수 사용 -->
    <button @click="number++">+</button>
    <button @click="stop">watchEffect 중지</button>

    <!-- props와 non-prop속성 -->
    <Practices03 :number="number" id="childId" />
</template>

<script>
import Practices03 from "./Practices03.vue";
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
    // 컴포넌트 불러올때 필수!
    components: {
        Practices03,
    },
    setup() {
        // v-if, v-show에 사용할 변수
        const count = ref(0);

        // computed 속성에 사용할 객체들
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

        // watch, watchEffect 함수에 사용할 변수
        const number = ref(0);

        // watch함수는 현재값과 과거값을 인자로 받는다.
        watch(number, (current, prevent) => {
            console.log(`현재값 : ${current} / 과거값 : ${prevent}`);
        });

        // watchEffect 함수는 인자를 받지않고, ref함수의 value값을 이용해 사용한다.
        // 그리고 watch함수와 다르게, 함수를 종료시킬 수 있다.
        const stop = watchEffect(() => {
            console.log(`현재값 : ${number.value}`);
        });

        return {
            count,
            arr1,
            smallItems,
            number,
            stop,
        };
    },
};
</script>

<style scoped></style>
