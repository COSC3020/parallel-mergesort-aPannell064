const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Generate Random Arrays
function randArr() {
    const arr = [];
    const size = Math.floor(Math.random() * 21);
    for(let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 51));
    }
    return arr;
}

// Test
describe('pmsMR', function () {
    // Do 100 tests
    for (let i = 0; i < 100; i++) {
        const arr = randArr();
        const expected = [...arr].sort((a, b) => a - b);

        it('Should return correct result for array ' + JSON.stringify(arr), function (done) {
            pmsMR(arr, function (actual) {
                try {
                    assert.deepStrictEqual(actual, expected);
                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
    }
});
