<!-- src/components/Hello2.vue -->
<template>
    <div>
        <div class="greeting">Helloxxx {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    created: function () {
        fetch('json/74l63.json')
            .then(response => response.json())
            .then(json => {
                this.products = json.products
            })
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        },
        totalProducts(): number {
            return this.products.reduce((sum, product) => {
                return sum + product.quantity
            }, 0)
        }

    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
