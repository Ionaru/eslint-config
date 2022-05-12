/* eslint-disable @typescript-eslint/no-unused-vars */

interface IFoo {
    name: string;
    greet(): string;
}

interface IBar { name: string; }

new Promise<{ id: string; }>(() => { /* empty */ });
