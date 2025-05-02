const fs = require('fs');

eval(fs.readFileSync('code.js')+'');

function randArr() {
    const arr = [];
    const size = Math.floor(Math.random() * 21);
    for(let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 51));
    }
    return arr;
}

var arr;
var tests = []; 
var expected = [];
for(let i = 0; i < 100; i++) {
    arr = randArr();
    tests.push([...arr]);
    expected.push(JSON.stringify(arr.sort((a, b) => a - b)))
}


for(let i = 0; i < tests.length; i++) {
    pmsMR(tests[i], function(actual) {
        console.assert(JSON.stringify(actual) === expected[i], "Actual: " + JSON.stringify(actual) + "\tExpected: " + expected[i]);
    });
}
