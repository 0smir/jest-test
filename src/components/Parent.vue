<template>
  <div>
    <p>Parent:</p>
    <ChildComponent msg="Parent component"/>
  </div>
</template> 

<script>
import ChildComponent from '@/components/Child.vue';

export default {
  name: "ParentComponent",
  components: {
    ChildComponent
  }
    
}
</script>

<style lang="scss" scoped>

</style>