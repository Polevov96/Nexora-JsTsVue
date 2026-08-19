<template>
  <div class="wrapper">
    <SearchEditFormVue />
    <TaskListFormVue />
  </div>
</template>

<script>
import SearchEditFormVue from "./SearchEditForm.vue";
import TaskListFormVue from "./TaskListForm.vue"; //Форма списка задач Vue

export default {
  name: "WrapperTodo",
  components: {
    SearchEditFormVue,
    TaskListFormVue,
  },
  // created() {
  //       // eslint-disable-next-line no-debugger
  //       debugger;
  // }
};


</script>

<style scoped>
.wrapper {
  padding: 60px 154px 60px 172px;
  width: 874.02px;
  height: 1588.019px;
  left: 360px;
  top: 60px;
  background-color: white;
  /* overflow: auto; */
  /* border-radius: 50px; */
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  justify-content:center;
}
</style>
