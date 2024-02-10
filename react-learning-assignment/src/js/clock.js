$(document).ready(function() {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        var timeString = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + ampm;
        $('#clock').html(timeString);

        var greeting = getGreeting(now);
        $('#greeting').html(greeting);

        setTimeout(updateClock, 1000); // Update every second
    }

    function addZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function getGreeting(now) {
        const hours=now.getHours();
        if (hours >= 5 && hours < 12) {
            return 'Good Morning!';
        } else if (hours >= 12 && hours < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    }

    updateClock(); // Initial call to display the clock
});
