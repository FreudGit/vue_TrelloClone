<script lang="ts" setup>
import { useBoardStore } from "~/stores/boardStore";
const boardStore = useBoardStore();
const route = useRoute();
const router = useRouter();
const toast=useToast();
const id = ref(route.params.id);

const task = computed(() => {
  return boardStore.getTask(route.params.id);
});

function deleteTask() {
  console.log("Before toast"); // Debug log

  boardStore.deleteTask(route.params.id);
  router.push("/");

  toast.add({ title: 'Task deleted', description: 'Task has been deleted', timeout: 1000, icon: 'i-heroicons-trash', color: 'green'})
  console.log("After toast"); // Debug log


}
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <section v-if="task">
        <!-- <h1>Page: {{ route.params.id }}</h1>
      <h2>{{ task?.name }}</h2> -->

        <UFormGroup label="name" class="mb-4 w-full">
          <UInput v-model="task.name" type="text" />

          <!-- <UInput v-model="task?.name" type="text"  />
      <UTextarea>{{ task?.description }}</UTextarea>
 -->
        </UFormGroup>
        <UFormGroup label="description" class="mb-4 w-full">
          <UTextarea v-model="task.description"></UTextarea>
        </UFormGroup>
        <UButton icon="i-heroicons-trash" color="red" @click="deleteTask">
          Delete Task
        </UButton>
      </section>
      <section v-else="task">Task not found</section>
    </div>
  </div>
</template>

<style></style>
