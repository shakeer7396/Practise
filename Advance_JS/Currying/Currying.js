// Curring is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and modular code.

// In React, currying is often used in higher-order components (HOCs) and functional programming patterns to create more flexible and reusable components.

const add = (a) => (b) => (c) => a + b + c;
console.log("Total sum is", add(2)(3)(4)); // 9
