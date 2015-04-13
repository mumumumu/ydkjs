// code here! :)

// 1.
function foo() {
    return 1;
}

function bar() {
    return 2;
}

// 2.
function add(x, y) {
    return x + y;
}

console.log(add(foo(), bar()));

// 3.
function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

// 4.
function value(x) {
    return function() {return x;};
}

// 5.
test = [value(5), value(4), value(3), value(2), value(1)];
function addnIterative(nArray) {
    var result = nArray[0];
    for (var i = 1; i < nArray.length; i++) {
        result = value(add2(result, nArray[i]));
    }
    return result()
}
console.log(addnIterative(test) === 15);

test = [value(5), value(4), value(3), value(2), value(1)];
function addnRecursive(nArray) {
    if (nArray.length === 1) {
        return nArray[0]();
    } else {
        nArray[0] = value(add2(nArray[0], nArray.pop()));
        return addnRecursive(nArray);
    }
}
console.log(addnRecursive(test) === 15);

test = [value(5), value(4), value(3), value(2), value(1)];
function addnFunctional(nArray) {
    return nArray.reduce(function(prevValue, currentValue) {
        return value(add2(prevValue, currentValue));
    })();
}
console.log(addnFunctional(test) === 15);

// 6.
odds = [1, 3, 5, 7, 9, 1, 3, 5, 7, 9];
evens = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];

function dedupe(nArray) {
    return nArray.reduce(function(dedupedArray, currentValue) {
        if (dedupedArray.indexOf(currentValue) == -1) {
            dedupedArray.push(currentValue);
        };
        return dedupedArray;
    }, []);
}

console.log(dedupe(odds));
console.log(dedupe(evens));

// 7.
test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenfy(nArray) {
    return nArray.filter(function(val) {
        return val % 2 == 0;
    });
}
console.log(evenfy(test));

// 8.
evensArray = evenfy(test);
evensFns = evensArray.map(value);
sum = addnFunctional(evensFns);
console.log(sum);
