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
			this.count()
			// console.log(this.wordCount)
		}
	}

	count() {
		this.wordCount++;
		// let wordCount = 0;
		// wordCount ++;
		// console.log(this.wordCount)
	}

	suggest(prefix) {
		let letters = prefix.split('')
		let currentNode = this.root;
		// console.log(currentNode.children)
		for(let i = 0; i < letters.length; i++) {
			currentNode = currentNode.children[letters[i]]
			if(!currentNode) {
				return []
			} 	
		}

		const suggestArray = [];
		
		getWords(prefix, currentNode)

		function getWords(stringsSoFar, node ) {
			Object.keys(node.children).forEach((key) => {
				let newString = stringsSoFar + key
				if(node.children[key].endOfWord) {
					suggestArray.push(newString)
				}
				getWords(newString, node.children[key])
			})
		}
		
		console.log(suggestArray)
		return suggestArray;
	}
}