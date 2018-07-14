import Node from '../lib/Node';
import Trie from '../lib/Trie';
import { expect } from 'chai';

describe('TRIE', () => {
	let trie;
  
    beforeEach(() => {
       trie = new Trie();
		})
		
		it('should start the with the root set to a node with a value of null', () => {
			expect(trie.root).to.deep.eq(new Node(null))
		});

		it('should start of with the word count at 0', () => {
			expect(trie.wordCount).to.eq(0)
		})

		it('should increase the word count when after the whole word has been addded', () => {
			trie.insert('hello')
			expect(trie.wordCount).to.eq(1)
			trie.insert('sup')
			expect(trie.wordCount).to.eq(2)
			trie.insert('punk')
			expect(trie.wordCount).to.eq(3)
		})

		it('should loop over the word passed in', () => {
			// let node = new Node()
			// trie.insert('hello')
			trie.insert('shopping')
			// console.log(letters)
			trie.insert('hit')
			trie.insert('hi')
			trie.insert('he')
			// trie.insert('oe')
			// trie.insert('it')
			// trie.insert('its')
			// trie.insert('help')
			// trie.insert('hoping')
			// trie.insert('helpful')
			// trie.insert('hemogloban')
			// trie.insert('humungous')
			// // trie.insert('shelf')
			// trie.insert('wonderful')
			console.log(JSON.stringify(trie, null, 4))
		})


		it.skip('should assign currrent letter to the first letter to the word that is passed in', () => {
			trie.insert('hello');
			expect()

		})

		it('should return a list of words that match the prefix given', () => {

			trie.suggest('')
		})
	
});