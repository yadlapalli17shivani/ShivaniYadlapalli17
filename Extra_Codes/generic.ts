class Box<T> {
    constructor(public value: T) {}

    display(): void {
        console.log(this.value);
    }
}

let numberBox = new Box<number>(100);
numberBox.display();

let stringBox = new Box<string>("Hello");
stringBox.display();