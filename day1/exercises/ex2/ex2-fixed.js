function solver(acronym) {
	solver.dict = solver.dict || [];
	solver.dict.sort();

	var letters = acronym.toLowerCase().split("");

	// seed answers with empty candidate
	var answers = [ [] ];
	var candidates;

	letters.forEach(function(letter){
		// save existing candidates
		candidates = answers.slice();

		// reset answers list (to be repopulated below)
		answers.length = 0;

		solver.dict.forEach(function(word){
			// matching word from dictionary?
			if (word.charAt(0) === letter) {
				// permutate previous candidates with new word
				candidates.forEach(function(candidate){
					// make a copy of the previous candidate
					candidate = candidate.slice();

					// add the new found word to its list
					candidate.push(word);

					// save candidate
					answers.push(candidate);
				});
			}
		});
	});

	answers = answers.filter(function(candidate){
		return candidate.reduce(function(prev_word,word){
			if (prev_word === false) return prev_word;

			if (word === prev_word) {
				return false;
			}
			return word;
		},"");
	});

	return answers;
}

solver.dict = [
	"association",
	"computer",
	"science",
	"program",
	"programming",
	"object",
	"oriented",
	"software",
	"control",
	"inversion",
	"of"
];


var choices = solver("oop");

console.table(choices);

