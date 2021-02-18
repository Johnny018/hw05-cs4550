// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
import { useState } from 'react';
import { uniq, renderGuess, renderRes } from './game';

function App() {
        const [input] = useState(randomNum());
        const [guesses, setGuesses] = useState([]);
	const [results, setResults] = useState([]);
	const [text, setText] = useState("");

	// based on professor code
	function updateText(ev){
		let vv = ev.target.value;
		setText(vv);
	}

	function guess() {
		if(onlyNum() === false){
			alert("Must be four numbers from 1-9");
		}
		else if(uniq(text) === false){
			alert("Only unique numbers from 1-9");
		}
		else if(isNewNumb() === false){
			alert("Input already given")
		}
		else{
			let newGuesses = [...guesses, text];
			let newResult = [...results, generateRes()];
			setGuesses(newGuesses);
			setResults(newResult);
		}
	}

	function isNewNumb() {
		let numbers = new Set(guesses);
		return numbers.has(text) === false;
	}

 	// based on professor code
	function KeyPress(ev) {
		if (ev.key === "Enter") {
			guess();
		}
	}

	function onlyNum() {
		return /^[1-9]{4}$/.test(text);
	}

	function generateRes() {
		let a = 0;
		let b = 0;
		let numbers = new Set(input);
		for(let i = 0; i < 4; i++) {
			if(text[i] === input[i]) {
				a += 1;
			}
			else if(numbers.has(text[i])) {
				b += 1;
			}
		}
		return(a + "A" + b + "B");
	}

	function gameWon() {
		if(results.length === 0) {
			return false;
		}
		let result = results[results.length - 1];
		return result[0] === "4";
	}

	function randomNum() {
		let numbers = ["1","2","3","4","5","6","7","8","9"];
		let number = "";
		for(let i = 0; i < 4; i++) {
			let rand = Math.floor(Math.random() * numbers.length);
			number += numbers[rand];
			numbers.splice(rand, 1);
		}
		return number;
	}

	function renderScreen() {
		if(gameWon()) {
			return(
				<h1>You Won!</h1>
			);
		}
		if(guesses.length >= 8){
			return(
  				<h1>Game Over!</h1>

 			);
		}
		return(
			<div>
			<h1>Input: <input type="text"
                                            	maxlength="4"
                                                value={text}
                                                onChange={updateText}
                                                onKeyPress={KeyPress} />
                                        <button onClick= {guess} type="button">ok</button></h1>
                                        <div class="grid-container">
                                        <div class="Guess">Guess</div>
                                        <div class="Result">Result</div>
                                        <div class="one">1</div>
                                        <div class="two">2</div>
                                        <div class="three">3</div>
                                        <div class="four">4</div>
                                        <div class="five">5</div>
                                        <div class="six">6</div>
                                        <div class="seven">7</div>
                                        <div class="eight">8</div>
                                        {renderGuess(guesses)}
					{renderRes(results)}
					</div>
			</div>
		);
	}
	return(<div className="App">{renderScreen()}</div>);
}

export default App;
