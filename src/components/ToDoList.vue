<template>
  <div>
    <h1>Lets Learn!</h1>
    <span>list to learn</span>
    <ul>
      <li v-for="todo in toDos" key="todo.id" data-test="todo-item">
        {{ todo.text }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "ToDolist",
  data() {
    return {
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
  }
    
}
</script>

<style lang="scss" scoped>

</style>