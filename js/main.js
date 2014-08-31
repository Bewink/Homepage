var nbLetters = 5;
var startDelay = 500;
var interval = 500;

function addListener(obj, eventName, listener) {
    if(obj.addEventListener) {
        obj.addEventListener(eventName, listener, false);
    } else {
        obj.attachEvent("on" + eventName, listener);
    }
}

addListener(document, 'DOMContentLoaded', function() {
    setTimeout(
        function() {
            displayLetter(nbLetters);
        },
        startDelay
    );
});

function displayLetter(id) {
    document.getElementById('letters').getElementsByTagName('img')[nbLetters-id].classList.add('displayed');
    document.getElementById('shadows').getElementsByTagName('img')[nbLetters-id].classList.add('displayed');

    if(id > 0) {
        setTimeout(
            function () {
                displayLetter(id - 1);
            },
            interval
        );
    } else {
        setTimeout(
            function() {
                document.getElementById('punch').classList.add('displayed');
                setTimeout(
                    function() {
                        document.getElementById('mail').classList.add('displayed');
                    },
                    1000
                );
            },
            1000
        );
    }
}