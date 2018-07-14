import Node from './Node';
export default class Trie {
constructor() {
		this.root = new Node(null);
		this.wordCount = 0;
	} 

	insert(word) {
		let letters = word.split('')
		let currentNode = this.root 
		for(let i = 0; i < letters.length; i++) {
			let currentLetter = letters[i]
			if(!currentNode.children[currentLetter]) {
				let newLetterNode = new Node(currentLetter)
				currentNode.children[currentLetter] = newLetterNode; 
				currentNode = currentNode.children[currentLetter];
			} else  {
				currentNode = currentNode.children[currentLetter]
			}
		}
		if(!currentNode.endOfWord) {
			currentNode.endOfWord = true
			this.wordCount++;
			console.log(this.wordCount)
		}
	}

	count() {
		// let wordCount = 0;
		// wordCount ++;
		// console.log(wordCount)
	}

	suggest(letter) {
		let letters = [];
		let currentNode = this.root;
		

	}



}