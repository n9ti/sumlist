<template>
  <div class="home">
    <h1>Sum: {{sumPrice}}</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.name }} {{ todo.price }}
        <button @click="removeTodoItem(todo.id)">x</button>
      </li>
    </ul>
    <hr/>
    <input v-model="newTodo.name">
    <input v-model="newTodo.price" type="number">
    <button @click="submitTodoItem">Add</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      newTodo: {
        name: '',
        price: 0
      }
    }
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['sumPrice'])
  },
  methods: {
    ...mapMutations(['addTodoItem', 'removeTodoItem']),
    submitTodoItem () {
      this.addTodoItem(this.newTodo)
      this.newTodo = {
        name: '',
        price: 0
      }
    }
  }
}
</script>
