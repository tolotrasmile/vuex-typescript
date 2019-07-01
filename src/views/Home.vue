<template>
  <div class="home">
    <todo-list msg="Welcome to NodeJS" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/todo/TodoList.vue';

@Component({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {}
</script>
