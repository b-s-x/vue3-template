<script setup lang="ts">
import HelloWorld from  './components/HelloWorld.vue';
import AnotherRenderComponent from './components/AnotherRenderComponent.jsx';
import RenderComponent from './components/RenderComponent.jsx';
import FunctionalComponent from './components/FunctionalComponent.jsx';

const VALUE: number = 66666666;
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <AnotherRenderComponent />
  <FunctionalComponent :value="VALUE"/>
  <RenderComponent />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
