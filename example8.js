var x = 50;

function show() {
    console.log(x);

    if (true) {
        var x = 100;
    }

    console.log(x);
}

show();