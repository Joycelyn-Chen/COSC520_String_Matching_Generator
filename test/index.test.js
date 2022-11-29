/*
This file contains code that is part of “tt-boyer-moore-js” which is released under the MIT License. 
See the LICENSE file for more information or go to https://opensource.org/licenses/MIT for full license details.
Unknown (2021) tt-boyer-moore-js [Code Base]. https://github.com/tealtadpole/tt-boyer-moore-js
*/


const bm = require('../src/boyer-moore.js')

test('Booyer Moore string search test', () => {
    const text = 'this is random sentence'
    const pattern = 'random'
    expect(bm.boyerMooreSearch(text, pattern)).toBe(8);
});
 