<template>
    <div class="container">
        <div class="logo">
            <h2>Awwsome</h2>
        </div>
        <nav class="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about"> About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nav',
})
</script>
