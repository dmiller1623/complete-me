import Node from './Node';
export default class Trie {
  constructor() {
    this.root = new Node(null);
    this.wordCount = 0;
  } 

  insert(word) {
    let letters = [...word];
    let currentNode = this.root; 

    for (let i = 0; i < letters.length; i++) {
      let currentLetter = letters[i];

      if (!currentNode.children[currentLetter]) {
        let newNodeLetter = new Node(currentLetter);

				currentNode.children[currentLetter] = newNodeLetter; 
        currentNode = currentNode.children[currentLetter];

      } else  {
        currentNode = currentNode.children[currentLetter];
      }
    }
    if (!currentNode.endOfWord) {
      currentNode.endOfWord = true;
      this.count();
    }
  }

  count() {
    this.wordCount++;
  }

  suggest(prefix) {
    let letters = [...prefix];
    let currentNode = this.root;

    for (let i = 0; i < letters.length; i++) {
      let currentPrefixLetter = letters[i]
      currentNode = currentNode.children[currentPrefixLetter];
      if (!currentNode) {
        return [];
      } 	
    }

    const suggestArray = [];
		
    getWords(prefix, currentNode);

    function getWords(partOfString, node ) {
      Object.keys(node.children).forEach((key) => {

        let newString = partOfString + key;

        if (node.children[key].endOfWord) {
          suggestArray.push(newString);
        }
        getWords(newString, node.children[key]);
      });
		}
    return suggestArray;
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word);
    });
  }
}