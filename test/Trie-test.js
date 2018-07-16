import Node from '../lib/Node';
import Trie from '../lib/Trie';
import { expect } from 'chai';
import fs from 'fs';
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

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

		it('should have a suggest method', () => {
			expect(trie).respondsTo('suggest')
		})

		it('should return an empty array in no words are in the prefix', () => {
			trie.insert('help')
			trie.insert('hello')
			trie.insert('howdy')
			expect(trie.suggest('hz')).to.deep.equal([])
		})

		it('should return an array of words with matching prefix letters', () => {
			trie.insert('help')
			trie.insert('hello')
			trie.insert('howdy')
			trie.suggest('he')
			expect(trie.suggest('he')).to.deep.equal(['help', 'hello'])
		})

		it('should have populate method',() => {
			expect(trie).respondsTo('populate')
		})

		it.skip('should populate the trie with words from the dictionary', () => {
			trie.populate(dictionary);
			expect(trie.wordCount).to.deep.equal(235886)
		})
});