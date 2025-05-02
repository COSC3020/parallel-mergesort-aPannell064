const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort = jsc.forall("array nat", function (arr, done) {
    const a1 = JSON.parse(arr);
    const a2 = JSON.parse(arr);

    pmsMR(a1, function (i) {
        const pass = JSON.stringify(i) === JSON.stringify(expected).sort((a, b) => a - b);
        done(pass);
    });
});

jsc.assert(testSort);
