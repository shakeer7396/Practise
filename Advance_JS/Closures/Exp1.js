// A Closure is formed when a inner function remembers variables from its outer function even after the outer function has executed. It provides data encapsulation and function-level scoping. It is commonly used in react hooks like useState and useEffect.

// In React, closures are heavily used in hooks, especially in useState updater functions that capture previous values.

function outer() {
    let count =0;
    return function inner() {
        count++;
        return count;
    }
};

let counter = outer();
console.log(counter()); //1
console.log(counter()); //2