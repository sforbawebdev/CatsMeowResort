<script setup> 
   import data from '../assets/data/data.json';
   import Hero from '@/components/Hero.vue';
   import Accordion from '@/components/Accordion.vue';
   import Intro from '@/components/Intro.vue';

   let pageData = data?.pages?.filter(page => page?.title?.toLocaleLowerCase() === "index");
   pageData = pageData && pageData[0];

   const components = {
      Accordion, Hero, Intro,
   }
   const componentData = pageData?.components;
   const heroData = pageData?.hero;
</script>

<template>
   <Hero :data="heroData"/>
   <Container>
         <div v-for="item in componentData">
            <component  :is="components[item.title]" :data="item.data"/>
         </div>
   </Container>
</template>