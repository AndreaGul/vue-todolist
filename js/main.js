'use strict';

const { createApp } = Vue;
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 3
//   Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
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
      todoChange: '',
    };
  },
  methods: {
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      const newTodo = { text: this.todoChange, done: false };

      if (this.todoChange.trim().toLowerCase() !== '') {
        this.todoList.push(newTodo);

        this.todoChange = '';
      }
    },
  },
}).mount('#app');
