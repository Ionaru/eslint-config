class MyClass {

    constructor(
        public readonly inputString: string,
    ) {
    }

    public doSomething() {
        void this.inputString;
    }

}

const myClass = new MyClass('test');
myClass.doSomething();
