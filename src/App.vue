<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const layout = computed( () => {
      return (router.meta.layout || 'default-layout');
    });

    const router = useRoute();

    onMounted( () => {
      console.log(router.meta);
    })

    return {
      layout,
    }
  }  
}
</script>
