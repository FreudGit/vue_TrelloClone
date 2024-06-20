<script setup>
import { useBoardStore } from "~/stores/boardStore";
const boardStore = useBoardStore();
const route=useRoute();
const router=useRouter();
const newColumnName = ref("");
//const isModalOpen= ref(false);
const isModalOpen= computed(()=>{
  //return false;
  //const route=useRoute();
  return route.name==="index-tasks-id";

});


function addColumn() {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = "";
}

function closeModal() {
  console.log("Close Modal");
 // const router=useRouter();
  router.push("/");
  
}


</script>

<template>

<nav class="border-green-200 bg-green-50 dark:bg-green-800 dark:border-green-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <h1 class="text-xl font-bold">
        {{ boardStore.board.name }}
      </h1>
    </div>
  </nav>
  <UContainer class="board-wrapper">
 
    <main class="board">
      <BoardColumn
        v-for="(column, columnIndex) in boardStore.board.Columns"
        :key="column.id"
        :column="column"
        :columnIndex="columnIndex"
        class="column"
      >
        
      </BoardColumn>
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          placeholder="Add Column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn"
        />
      </UContainer>
      <!-- <pre> {{ boardStore.board }}</pre> -->
    </main>
  </UContainer>
  <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
    <NuxtPage />
   
  </div>
</template>

<style></style>
