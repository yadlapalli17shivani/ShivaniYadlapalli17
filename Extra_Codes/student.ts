class Student {
    constructor(
        public id: number,
        public name: string,
        public marks: number
    ) {}

    display() {
        console.log(this.id, this.name, this.marks);
    }
}

let s = new Student(1, "John", 90);
s.display();