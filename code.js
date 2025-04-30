function pmsMR(v1, cb) {
    var Parallel = require('paralleljs'),
        p = new Parallel(v1);

    p.reduce(function(x) {
        var left = x[0].length ? x[0] : [x[0]];
        var right = x[1].length ? x[1] : [x[1]];

        var tmp = [], a = 0, b = 0
        for (var k = 0; k < left.length + right.length; k++) {
            if (a < left.length && (b > right.length-1 || left[a] < right[b])) {
                tmp[k] = left[a++];
            } else {
                tmp[k] = right[b++];
            }
        }
        return tmp;
    }).then(cb);
}