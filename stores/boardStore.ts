import { v4 as uuid } from "uuid";
import { defineStore } from "pinia";

import { useStorage } from "@vueuse/core";

import boardData from "~/data/board.json";

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData);
  //const board = ref(boardData)

  const getTask = computed(() => {
    return (taskId) => {
      for (const column of board.value.Columns) {
        const task = column.tasks.find((task) => task.id === taskId);
        if (task) {
          return task;
        }
      }
    };
  });

  function addTask(columnIndex: number, newTaskName: string) {
    board.value.Columns[columnIndex].tasks.push({
      id: uuid(),
      name: newTaskName,
      description: "",
      status: "todo",
    });
  }

  function deleteTask(taskId) {
    for (const columnIndex in board.value.Columns) {
      const taskIndex = board.value.Columns[columnIndex].tasks.findIndex(
        (task) => task.id === taskId
      );
      if (taskIndex !== -1) {
        board.value.Columns[columnIndex].tasks.splice(taskIndex, 1);
        return;
      }
    }
  }

  function moveTask({ fromTaskIndex, toTaskIndex, fromColumnIndex, toColumnIndex }) {


    const task = board.value.Columns[fromColumnIndex].tasks.splice(fromTaskIndex, 1)[0];



    board.value.Columns[toColumnIndex].tasks.splice(toTaskIndex, 0, task)
  }

  function addColumn(columnName: string) {
    board.value.Columns.push({
      id: uuid(),
      name: columnName,
      tasks: [],
    });
  }

  function deleteColumn(columnIndex) {
    board.value.Columns.splice(columnIndex, 1);
  }

  function moveColumn({ fromColumnIndex, toColumnIndex }) {
    const column = board.value.Columns[fromColumnIndex];
    board.value.Columns.splice(fromColumnIndex, 1);
    board.value.Columns.splice(toColumnIndex, 0, column);
  }

  return {
    board,
    addColumn,
    deleteColumn,
    getTask,
    addTask,
    deleteTask,
    moveTask,
    moveColumn,
  };
});
