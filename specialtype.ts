// using the 'any' type
export{}
let flexiblevalue: any = 15;
flexiblevalue = "Now I am in vishnu clg";
flexiblevalue = true;

// using the 'unknown' type
let mysteryvalue: unknown = "Hello svecw";
 
if (typeof mysteryvalue === "string") {
    console.log("Length of unknown string: " + mysteryvalue.length);
}

// using the 'void' type
function lognotification(message: string): void {
    console.log("ALERT: " + message);
}

lognotification("Environment Setup Complete!");