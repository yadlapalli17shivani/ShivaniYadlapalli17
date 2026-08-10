export {}
 let Name: string="Shivani";
let Age: number=20;
let Member: boolean=true;
console.log("Data type Name is-->" +typeof Name);
console.log("Data type Age is-->" +typeof Age);
console.log("Data type Member is-->" +typeof Member);
function displayProfile(name:string,age:number,active:boolean):void{
    console.log(`User : ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ?"active" : "Inactive"}`);
}
displayProfile(Name,Age,Member);