<template>
    <p>{{ `첫번째 메시지: ${msg} / 두번째 메시지: ${msg2}` }}</p>
    <!-- 자식 컴포넌트에게 전달해준 msg 변수가 자식 컴포넌트에서 변경되고, 변경된 값이 부모 컴포넌트에도 변화된 변수값을 가져야 함으로 v-model을 사용한다. -->
    <Component v-model:msg="msg" v-model:msg2="msg2">
        <!-- slot 사용, 자식 컴포넌트의 slot 태그의 name이 header라면 해당 되는 Header를 갖고, name이 없다면 Default를 얻는다. -->
        <!-- <template v-slot:default>Default </template> -->
        <template v-slot:header>Header </template>

        <!-- slotProps, v-slot:default와 중복된다. -->
        <template v-slot="slotProps">{{ slotProps }} </template>
    </Component>
</template>

<script>
import Component from "./Component.vue";

import { ref } from "vue";
export default {
    components: {
        Component,
    },
    setup() {
        const msg = ref("초기 메시지");
        const msg2 = ref("초기 메시지");
        return {
            msg,
            msg2,
        };
    },
};
</script>
