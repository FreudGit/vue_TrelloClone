

<script setup>

  const route=useRoute();
  console.log("Route: ", route.name);

</script>

<template>
<html >
  <div>
   
    <NuxtPage />
    
  </div>
  <UNotifications />
  </html>
</template>

