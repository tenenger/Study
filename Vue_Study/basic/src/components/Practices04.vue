<template>
    <div>
        <h2>팝업창입니다.(자식 컴포넌트)</h2>
        <!-- 클릭하게되면 부모 컴포넌트에게 close라는 이름을 건네준다. -->
        <button @click="$emit('close')">팝업창 닫기(자식 컴포넌트)</button>
    </div>
</template>

<script>
export default {
    // 부모 컴포넌트에게 사용자 이벤트를 건네줄 이름을 정한다.
    emits: ["close"],
};
</script>

<style></style>
