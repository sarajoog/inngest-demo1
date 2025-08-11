import { inngest } from '../client';

export const helloWorld = inngest.createFunction(
    { id: 'hello-world', name: "Hello World" },
    {event: 'test/hello.world'},
    async ({ event }) => {
        return {event, body: event.data.message}
    }
);