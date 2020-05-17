import { createMachine, interpret } from 'xstate';

const lightMachine = Machine({
  id: 'changeLight',
  initial: 'red',
  states: {
    red: {
      on: {
        changeLight: 'green',
      },
    },
    green: {
      on: {
        changeLight: 'yellow',
      },
    },
    yellow: {
      on: {
        changeLight: 'red',
      },
    },
  },
});

const service = interpret(lightMachine);

export { lightMachine, service };
