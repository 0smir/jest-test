<template>
  <header>
   <Navigation />
    <div class="wrapper">
      <Message msg="You did it!" />
    </div>
    
  </header>
  <div class="main">
      <ToDoList />
      <ParentComponent />
  </div>

</template>

<script>
import Navigation from '@/components/Nav.vue';
import Message from '@/components/Message.vue';
import ToDoList from '@/components/ToDoList.vue';
import ParentComponent from '@/components/Parent.vue';
export default {
  components: {
    Navigation,
    Message,
    ToDoList,
    ParentComponent
  },
};
</script>

<style scoped>
header {
  flex-wrap: wrap;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    width: 100%;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
