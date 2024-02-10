function createCounterFunction() {
    let invocationCount = 0;

    return {
        invoke: function() {
            invocationCount++;
            console.log(`Function invoked ${invocationCount} time(s).`);
        },
        getInvocationCount: function() {
            return invocationCount;
        }
    };
}

// Example usage
const counterInstance1 = createCounterFunction();
const counterInstance2 = createCounterFunction();

counterInstance1.invoke();
counterInstance1.invoke();

counterInstance2.invoke();

console.log(`Counter instance 1 invocation count: ${counterInstance1.getInvocationCount()}`);
console.log(`Counter instance 2 invocation count: ${counterInstance2.getInvocationCount()}`);

