class MyClass {

    public constructor(
        public readonly inputString: string,
    ) {
    }

    doSomething() {
        void this.inputString;
    }

}

const myClass = new MyClass('test');
myClass.doSomething();
