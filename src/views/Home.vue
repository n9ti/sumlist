<template>
  <div class="home">
    <h1>B</h1>
    <h1>Sum: {{sumPrice}}</h1>
    <div>
      <todo-item v-for="todo in todos" :key="todo.id" :name="todo.name" :price="todo.price">
        <button @click="removeTodoItem(todo.id)">x</button>
      </todo-item>
    </div>
    <hr/>
    <input id="name" v-model="newTodo.name">
    <input id="price" v-model="newTodo.price" type="number">
    <button id="add" @click="submitTodoItem">Add</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
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
