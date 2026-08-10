class Employee {
    public name: string;
    protected salary: number;
    private password: string;

    constructor(name: string, salary: number, password: string) {
        this.name = name;
        this.salary = salary;
        this.password = password;
    }

    display() {
        console.log(this.name, this.salary);
    }
}

let emp = new Employee("Alice", 50000, "1234");
emp.display();