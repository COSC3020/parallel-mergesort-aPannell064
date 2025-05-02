const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort = jsc.asyncProperty("array nat", function (arr, done) {
    const a1 = JSON.parse(arr);
    const expected = JSON.parse(arr).sort(function(a, b) { return a - b;};

    pmsMR(a1, function (result) {
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        done(pass);
    });
});
