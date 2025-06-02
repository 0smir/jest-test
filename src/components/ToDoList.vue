<template>
  <div class="section section--todo">
    <h1>Lets Learn!</h1>
    <span>list to learn</span>
    <form class="form_todo--add" data-test="form" @submit.prevent="createToDo">
      <input type="text" data-test="new-todo-item" v-model="newToDo">
    </form>
    <ul>
      <li v-for="todo in toDos" 
      :key="todo.id" 
      data-test="todo-item"
      :class="[todo.complited ? 'completed' : '']">

        <label for="{{ todo.id }}">
          <input type="checkbox"
          :id="todo.id"
          v-model="todo.complited"
          data-test="todo-item-checkbox">
          <span>{{ todo.text }}</span>
        </label>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "ToDolist",
  data() {
    return {
      newToDo:"",
      toDos: [
      {
          id: 1,
          text: "Learn Vue",
          complited: false
        },
        {
          id: 2,
          text: "Learn Jest",
          complited: false
        },
        {
          id: 3,
          text: "Learn how to combine Vue and Jest in one project",
          complited: false
        }
      ]
    }
  },
  methods: {
    createToDo() {
      this.toDos.push({
        id: new Date().getTime(),
        text: this.newToDo,
        complited: false
      });
      this.clearInput();
    },
    clearInput() {
      this.newToDo = "";
    }
  }
    
}
</script>

<style scoped>
.section {
  width: 100%;
  font-size: 16px;
}
.form_todo--add{
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}

</style>