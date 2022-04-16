import { createApp, ref } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// // 컴포넌트 생성하여 사용하려면, vite.config.js 파일에 vue의 경로를 수정해야한다.
// import { createApp, ref } from "vue";

// // 어플리케이션 인스턴스 app 생성
// const app = createApp({});

// // 하위 컴포넌트 모두가 사용할 수 있는 값(inject)를 provide로 제공한다.
// // 첫번째 매개변수는 변수명, 두번째 매개변수는 값이다.
// app.provide("counter_header", "Counter ");

// // app.component는 2개의 매개변수를 받는데, 첫번째는 신규 컴포넌트를 받는다.
// // 두번째 매개변수는 신규 컴포넌트의 내용이다.
// // 신규 컴포넌트 counter를 app에 등록
// app.component("counter", {
//     // inject 메서드를 사용하여, provide값을 사용할 수 있다.
//     inject: ["counter_header"],

//     setup() {
//         const count = ref(0);
//         return { count };
//     },

//     // 화면에 표시할 template를 생성한다.
//     template: `
//         <span>{{ counter_header }}</span>
//         <button @click="count++" v-text="count" />
//         <hr/>
//     `,
// });

// // config 속성의 globalProperties에는 title이라는 키를 이용해 전역 변수(부모 element까지만)를 선언한다.
// app.config.globalProperties.title = "Vue 3 Demo";

// // 신규 컴포넌트 MyComponent app에 등록
// // 주의할점은 컴포넌트 이름명은 camelcase가 강제로 케밥케이스로 변경되기 때문에, DOM에 사용할 인스턴스는 처음부터 케밥케이스로 이름을 짓는다.
// app.component("my_component", {
//     // props는 컴포넌트에 데이터를 넘겨줄 수 있는 사용자 지정 속성이다.
//     // 넘겨줄 props의 상세 정보를 지정할 수 있다.
//     props: {
//         title: {
//             type: String,
//             required: true,
//             validator: function (value) {
//                 return typeof value == String;
//             },
//         },
//         data: {
//             type: Object,
//             default: () => {
//                 return [];
//             },
//         },
//     },
//     setup() {
//         const count = ref(0);
//         return { count };
//     },
//     template: `
//         <h3 v-text="title"/>
//         <li v-for="i in data" :key="i">{{ i }}</li>
//     `,
// });

// // app을 index.html의 id값이 app인 엘리먼트에 장착
// app.mount("#app");
