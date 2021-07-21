class MyClass {

    public constructor(
        readonly inputString: string,
    ) {
    }

    public doSomething() {
        void this.inputString;
    }

}

const myClass = new MyClass('test');
myClass.doSomething();
