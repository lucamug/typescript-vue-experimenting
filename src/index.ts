import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import ExperienceComponent from "./components/Experience.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Component</h1>
        <experience-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        ExperienceComponent,
        HelloDecoratorComponent
    }
});
