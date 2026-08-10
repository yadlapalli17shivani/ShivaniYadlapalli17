class StudentInfo {
    readonly studentId: number;

    constructor(id: number) {
        this.studentId = id;
    }
}

let st = new StudentInfo(101);
console.log(st.studentId);