<template>
    <div class="home">
        <div class="container">
            <h2>This is homepage</h2>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
})
</script>

<style lang="scss" scoped>
    .home {
        padding: 75px 0;
    }
</style>