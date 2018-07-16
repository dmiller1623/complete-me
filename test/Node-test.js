import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
    let node;
  
    beforeEach(() => {
      node = new Node('pizza');
    })
  
    it('should exist', () => {
      expect(node).to.exist;
    })
  
    it('should start off with no children', () => {
      expect(node.children).to.deep.equal({});
    })
    it('should not start as the end of the word',() => {
        expect(node.endOfWord).to.equal(false)
    })
  })
  