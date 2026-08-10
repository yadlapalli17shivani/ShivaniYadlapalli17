// Traditional Named Function
export {}
function calculateFinalAmount(cost: number, discount: number): number {
    return cost - (cost * discount);
}

// Arrow Function
const calculateDiscount = (cost: number, discount: number): number => {
    return cost - (cost * discount);
};

//  Shorthand Arrow Function
const getStoreMessage = (store: string): string =>
    `Welcome to ${store} Shopping Mall!`;

// --- Testing the Program ---

const productCost: number = 1500;   // Product Price
const discountRate: number = 0.20;  // 20% Discount

console.log(getStoreMessage("Trends"));

// Using the traditional method
const finalAmount1 = calculateFinalAmount(productCost, discountRate);
console.log(`Final Amount (Traditional): ₹${finalAmount1}`);

// Using the arrow function method
const finalAmount2 = calculateDiscount(productCost, discountRate);
console.log(`Final Amount (Arrow): ₹${finalAmount2}`);

/* INLINE COMPARISON:

Traditional:
function square(num: number): number {
    return num * num;
}

Arrow:
const square = (num: number): number => num * num;

*/