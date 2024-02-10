$(document).ready(function() {
    const array = [1, 2, 3, 4, 5];
    const delay = 3000; // 3 seconds

    $.each(array, function(index, value) {
        setTimeout(function() {
            console.log(value);
        }, index * delay);
    });
});