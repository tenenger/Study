<template>
    <div>
        <!-- props 표시 props:{}로 선언하면 밑에처럼 사용가능 -->
        {{ number }}
        <!-- props 표시 setup함수로 prop를 선언하면 밑에처럼 사용가능 -->
        {{ a }}
    </div>
    <div v-bind="$attrs">
        <!-- $attrs를 이용해, non-prop속성을 사용할 수 있다. -->
        {{ $attrs.id }}
        <!-- context.attrs를 이용해 non-prop속성을 사용한다. -->
        {{ abc }}
    </div>

    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트 보니기 : emit -->
    <button @click="isShow = !isShow">팝업창 켜기(부모 컴포넌트)</button>
    <!-- 자식 컴포넌트에서 받은 @close 이름은 isShow를 true 또는 false로 바꿔준다. -->
    <Practices04 v-show="isShow" @close="isShow = !isShow" />
</template>

<script>
import Practices04 from "./Practices04.vue";
import { ref } from "vue";
export default {
    // props 타입 선언
    props: {
        number: Number,
    },
    components: {
        Practices04,
    },
    // 자식에게 전달해줄 props명을 작성, :는 v-bind의 약자로 변수를 내보낸다는 뜻이다.
    // setup함수의 매개변수로 props 인자 넣으면 끝? 안적어도 실행되네?
    setup(props, context) {
        // prop 선언
        const a = props.number;

        // non-prop 속성 선언
        const abc = context.attrs.id;

        // emit 선행
        const isShow = ref(false);
        return {
            abc,
            a,
            isShow,
        };
    },
};
</script>

<style></style>
