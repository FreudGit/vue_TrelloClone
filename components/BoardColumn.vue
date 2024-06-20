<script setup>
import { useBoardStore } from "../stores/boardStore";

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  columnIndex: {
    type: Number,
    required: true,
  },
});

const boardStore = useBoardStore();

const isModalOpen = ref(false);

const editNameState = ref(false);
const router = useRouter();
const newTaskName = ref("");

function deleteColumn(columnIndex) {
  boardStore.deleteColumn(columnIndex);
}

function addTask() {
  boardStore.addTask(props.columnIndex, newTaskName.value);
  newTaskName.value = "";
}

function gotoTask(taskId) {
  router.push(`/tasks/${taskId}`);
  console.log("Task ID: ", taskId);
}

function pickupTask(event, { fromTaskIndex, fromColumnIndex }) {
  console.log("Picking up task: ", event, { fromColumnIndex, fromTaskIndex });

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("type", "task");
  event.dataTransfer.setData("from-Column-Index", fromColumnIndex);
  event.dataTransfer.setData("from-Task-Index", fromTaskIndex);
}

function pickupColumn(event, fromColumnIndex) {
  console.log("Picking up task: ", event, { fromColumnIndex});

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("type", "column");
 event.dataTransfer.setData("from-Column-Index", fromColumnIndex);  
/*   event.dataTransfer.setData("from-Task-Index", fromTaskIndex);   */
}

function dropItem(event, { toColumnIndex, toTaskIndex }) {
  /* event.preventDefault(); */
  const type = event.dataTransfer.getData("type");
  const fromColumnIndex = event.dataTransfer.getData("from-Column-Index");

  if (type === "task") {
    const fromTaskIndex = event.dataTransfer.getData("from-Task-Index");

    console.log({ fromColumnIndex, fromTaskIndex });

    boardStore.moveTask({
      fromTaskIndex,
      toTaskIndex,
      fromColumnIndex,
      toColumnIndex,
    });
  }else if (type === "column") {
/*     const fromColumnIndex = event.dataTransfer.getData("from-Column-Index");
 */    console.log({ fromColumnIndex });
    boardStore.moveColumn({
      fromColumnIndex: fromColumnIndex,
      toColumnIndex: toColumnIndex,
    });
  }
}
</script>

<template>
  <UContainer
    class="column"
    @dragenter.prevent
    @dragover.prevent
    @drop.stop="dropItem($event, { toColumnIndex: columnIndex })"
    draggable="true"
    @dragstart.self="pickupColumn($event, columnIndex)"
  >
    <div class="column-header mb-4">
      <div>
        <UInput v-if="editNameState" v-model="column.name" type="text" />

        <h2 v-else>{{ column.name }}</h2>
      </div>
      <div>
        <UButton
          icon="i-heroicons-pencil-square"
          @click="editNameState = !editNameState"
          class="mr-2"
        >
        </UButton>
        <UButton
          icon="i-heroicons-trash"
          color="red"
          @click="deleteColumn(columnIndex)"
        />
      </div>
    </div>
    <ul>
      <!-- {{ column }} -->
      <li v-for="(task, taskIndex) in column.tasks" :key="task.name">
        <UCard
          class="mb-4"
          @click="gotoTask(task.id)"
          draggable="true"
          @dragstart="
            pickupTask($event, {
              fromTaskIndex: taskIndex,
              fromColumnIndex: columnIndex,
            })
          "
           @drop.stop="dropItem($event, { toColumnIndex: columnIndex, toTaskIndex: taskIndex})" 
        >
          <strong>{{ task.name }}</strong>
          <p>{{ task.description }}</p>
         
        </UCard>
      </li>
    </ul>
    <UInput
      v-model="newTaskName"
      type="text"
      placeholder="Create new column"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addTask"
    />
  </UContainer>
</template>

<style></style>
