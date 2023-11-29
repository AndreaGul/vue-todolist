'use strict';

const { createApp } = Vue;
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 2
//   Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
createApp({
  data() {
    return {
      todoList: [
        {
          text: 'mangiare la pizza',
          done: true,
        },
        {
          text: 'mangiare il gelato',
          done: false,
        },
      ],
    };
  },
  methods: {
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount('#app');
