import Vue from 'vue'
import Vuex from 'vuex'
import createPlugin from 'logrocket-vuex'
import LogRocket from 'logrocket'

const logrocketPlugin = createPlugin(LogRocket)

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [logrocketPlugin],
  state: {
    todos: [
      {
        id: '00001',
        name: 'iPad',
        price: 20000,
        isActive: true
      }
    ]
  },
  mutations: {
    setTodos (state, todos) {
      state.todos = todos
    },
    addTodoItem (state, newTodo) {
      state.todos.push({
        ...newTodo,
        price: parseInt(newTodo.price),
        id: Math.random(),
        isActive: true
      })
    },
    removeTodoItem (state, id) {
      let index = state.todos.findIndex((item) => {
        return item.id === id
      })
      state.todos.splice(index, 1)
    },
    toggleTodoItemStatus (state, id) {
      let index = state.todos.findIndex((item) => {
        return item.id === id
      })
      state.todos[index].isActive = !state.todos[index].isActive
    }
  },
  getters: {
    sumPrice (state) {
      return state.todos.reduce((sum, todo) => {
        return sum + todo.price
      }, 0)
    }
  },
  actions: {
  }
})
