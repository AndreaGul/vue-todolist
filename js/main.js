'use strict';

const { createApp } = Vue;
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//   MILESTONE 1
//   Stampare all'interno di una lista HTML un item per ogni todo.
//   Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
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
  // methods: {
  //   doneOrNot(done){
  //     if(
  //       done = true,
  //     ),
  //   },
  // }
}).mount('#app');
