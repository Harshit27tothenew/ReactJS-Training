const createCounter = (function() {
    let count = 0;

    return function() {
        count++;
        console.log('jQuery Counter:', count);
    };
})();
createCounter();
createCounter();