<template>
    <section class="nav-wrapper">
        <app-nav></app-nav>
    </section>

    <component :is="layout">
        <router-view/>
    </component>

    <app-footer></app-footer>
    
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default defineComponent({
    components: {
        'app-nav': Nav,
        'app-footer': Footer,
    },

    setup() {
        const route = useRoute();

        const layout = computed( () => {
            return (route.meta.layout || 'default-layout');
        });

        return {
            layout
        }
  }  
})
</script>

<style lang="scss">
    @import './assets/styles.scss';
</style>
