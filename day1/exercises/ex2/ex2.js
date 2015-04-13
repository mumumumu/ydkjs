function solver(acronym) {
    var results = [[]];
    var letters = acronym.split('');
    var candidates;

    letters.forEach(function(letter) {
        candidates = results.slice();
        results.length = 0;
        solver.dict.forEach(function(word) {
            if (word.charAt(0) === letter) {
                candidates.forEach(function(candidate) {
                    candidate = candidate.slice();

                    candidate.push(word);

                    results.push(candidate);
                });
            }
        });
    });

    return results.filter(function(candidate) {
        return candidate.reduce(function(prev, curr) {
            if (prev === curr || prev === false) return false;
            return curr;
        });
    });
}

solver.dict = [
    'object',
    'oriented',
    'programming',
    'functional',
    'meta',
    'inverse',
    'scalable',
    'search',
    'optimized',
    'science',
    'unix',
    'poo',
    'pee'
];

var choices = solver("oop");

console.table(choices);
