// variable annotations with telugu movie data
export {}
let Phonename: string="Google Pixel";
let releaseYear: number=2024;
let isworth: boolean=true;
// function parameter and return type annotations
//this function strictly takes a string and a number, and must return a string
function getPhoneStatus(Phonename:string,year:number):string{
return `${Phonename}is released in ${year}`;
}
// array annotations
let Companyname:string[]=["Google","Vivo","Samsung"];
// using the annotations variables and functions
const summary:string = getPhoneStatus(Phonename,releaseYear);
console.log(summary);
console.log(`Starring: ${Companyname.join(",")}`);
console.log(`Is it worth?${isworth?"Yes" : "No" }`);
