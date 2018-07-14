import Node from '../lib/Node';
import Trie from '../lib/Trie';
import { expect } from 'chai';

describe('TRIE', () => {
	let trie;
  
    beforeEach(() => {
       trie = new Trie();
		})
		
		it.skip('should start with zero elements', () => {
			expect(trie.length).to.eq(0);
		});

		it('should loop over the word passed in', () => {
			// let node = new Node()
			// trie.insert('hello')
			// trie.insert('shopping')
			trie.insert('shit')
			trie.insert('hi')
			// trie.insert('he')
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
	
});