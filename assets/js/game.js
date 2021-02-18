export function uniq(xs) {
        return new Set(xs).size === 4;
}

export function renderGuess(guesses){
	const guesseshtml = [];

	for(let i = 1; i <= 8; i++){
		let guessClass = "guess" + i;
		let guess = guesses[i - 1];
		if(guess === undefined){
			guess = "";
		}
		guesseshtml.push(<div class={guessClass}>{guess}</div>);
	}
	return guesseshtml;
}

export function renderRes(results){
        const resultshtml = [];
        for(let i = 1; i <= 8; i++){
                let resultClass = "result" + i;
                let result = results[i - 1];
                if(result === undefined){
                        result = "";
                }
                resultshtml.push(<div class={resultClass}>{result}</div>);
        }
        return resultshtml;
export function uniq(xs) {
        return new Set(xs).size === 4;
}

export function renderGuess(guesses){
	const guesseshtml = [];

	for(let i = 1; i <= 8; i++){
		let guessClass = "guess" + i;
		let guess = guesses[i - 1];
		if(guess === undefined){
			guess = "";
		}
		guesseshtml.push(<div class={guessClass}>{guess}</div>);
	}
	return guesseshtml;
}

export function renderRes(results){
        const resultshtml = [];
        for(let i = 1; i <= 8; i++){
                let resultClass = "result" + i;
                let result = results[i - 1];
                if(result === undefined){
                        result = "";
                }
                resultshtml.push(<div class={resultClass}>{result}</div>);
        }
        return resultshtml;
}}
