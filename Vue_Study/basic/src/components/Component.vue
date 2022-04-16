<template>
    <div>
        <div>
            메시지 1 :
            <!-- input 태그의 value값을 받아올때, :value="msg"를 써도 좋지만, v-model를 쓰자 -->
            <!-- emit으로 부모컴포넌트에 변수를 전달해주는데, input값으로 업데이트된 변수를 전달해준다. -->
            <input
                v-model="msg"
                @input="$emit('update:msg', $event.target.value)"
            />
        </div>
        <div>
            메시지 2 :
            <input
                v-model="msg2"
                @input="$emit('update:msg2', $event.target.value)"
            />
        </div>

        <!-- slot 태그 안에는 기본값을 가진다. 그러나 부모 컴포넌트의 default가 정해지면 부모 컴포넌트의 기본값이 우선 적용된다. -->
        <button><slot name="header">기본값 들어감</slot></button>
        <button><slot>기본값 들어간</slot></button>

        <!--  -->
        <ul style="list-style-type: none">
            <li v-for="item in items">
                <slot :item="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    // 부모 컴포넌트에서 props를 받아 배열로 선언
    props: ["msg", "msg2"],
    // 부모 컴포넌트에게 변수 전달시, 변경된 값을 전달한다는 의미에서 update:를 접두사로 쓴다.
    emits: ["update:msg", "update:msg2"],
    setup() {
        const items = reactive([1, 2, 3]);
        return { items };
    },
};
</script>
