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
        <!-- 단반향 데이터 결합 -->
        <input v-bind:value="value1" type="text" />
        <input :value="value1" type="text" />

        <!-- 양방향 데이터 결합 -->
        <input v-model.trim="value2" type="text" />
    </div>
    <div>
        <div v-bind:title="value1">{{ value2 }}</div>
    </div>

    <!-- 이벤트 리스터로 사용자 입력처리 -->
    <button @click="count++">Up</button>
    <button @click="onMinus">Down</button>
    <div>{{ count }}</div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const data = "<h3>문자열 그대로 출력</h3>";
        const value1 = ref("변하지 않는 값");
        const value2 = ref("");
        const count = ref(0);
        return {
            data,
            value1,
            value2,
            count,
        };
    },
    methods: {
        onMinus: function (evt) {
            evt.preventDefault();
            this.count -= 1;
        },
    },
};
</script>
<style></style>
