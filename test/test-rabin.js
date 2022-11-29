/**
 * Copyright (c) 2022 Hemashushu <hippospark@gmail.com>, All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

 import { strict as assert } from 'assert';

 import { RabinKarp } from '../src/rabin-karp.js'
 
 function testFind() {
 
     // testing when there are mutiple matches
     let s = 'ababbbabbbabaababaaabaaaaabababaabcdabdbabab';
     let k1 = 'abaab';
     assert.equal(RabinKarp.find(s, k1), s.indexOf(k1));
 
     // testing when there is a single match
     let k2 = 'aaaab';
     assert.equal(RabinKarp.find(s, k2), s.indexOf(k2));
 
     // testing repeating letters
     let k3 = 'aabaaa';
     assert.equal(RabinKarp.find(s, k3), s.indexOf(k3));
 
     // testing for the match being the beginning elements
     let k4 = 'abab';
     assert.equal(RabinKarp.find(s, k4), s.indexOf(k4));
 }
 
 function testFind2() {
     
     // testing for alpha handling
     let s = 'abab';
     assert.deepEqual(RabinKarp.stringToCodePoints(s),[97,98,97,98]);
 
     // testing for symbol handling
     let q = 'a;!b';
     assert.deepEqual(RabinKarp.stringToCodePoints(q),[97,59,33,98]);
 
     // testing for number handling
     let r = 'a12b';
     assert.deepEqual(RabinKarp.stringToCodePoints(r),[97,49,50,98]);
 
 }
 
 function testFind3() {
     
     // testing for when pattern size equals text size
     let s = 'abab';
     let k1 = 'abab';
     assert.equal(RabinKarp.find(s, k1), s.indexOf(k1));
 
     // testing for when pattern size is greater than text size
     let s2 = 'abab';
     let p2 = 'ababa';
     assert.equal(RabinKarp.find(s2, p2), s2.indexOf(p2));
 
 }
 
 function testRabinKarp() {
     testFind();
     testFind2();
     testFind3();
     console.log('testRabinKarp() passed.');
 }
 
 (() => {
     testRabinKarp();
 })();
 