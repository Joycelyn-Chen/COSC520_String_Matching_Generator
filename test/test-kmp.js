// This file contains code that is part of “kmp-matcher” which is released under the MIT License as cited below. See the LICENSE file for more information or go to https://opensource.org/licenses/MIT for full license details.
// Badge, T (2016) kmp-matcher [Code Base]. https://github.com/guliash/kmp-matcher


var t = require('tape');
var kmp = require('../src/kmp-matcher');

t('test-kmp-1', function(t) {
    
    // tests for repeating matches
    var result = kmp.kmp('aabbaaccdsbbaab', 'ab');
    var need = [1, 13];
    t.same(result, need);
    t.end();
});

t('test-kmp-2', function(t) {

    // Extensive repeating values, of short short length
    var result = kmp.kmp('aabbaaccdsbbaab', 'a');
    var need = [0, 1, 4, 5, 12, 13];
    t.same(result, need);
    t.end(); 
});

t('test-kmp-4', function(t) {

    // Test for handling symbols
    var result = kmp.kmp('aabbaac!;!sbbaab', '!;!');
    var need = [7];
    t.same(result, need);
    t.end(); 
});

t('test-kmp-5', function(t) {

    // Test for handling numeric
    var result = kmp.kmp('aabbaac123sbbaab', '123');
    var need = [7];
    t.same(result, need);
    t.end(); 
});

t('test-kmp-6', function(t) {

    // Test for when the pattern is larger than the string
    var result = kmp.kmp('ab123!', 'ab123!ab');
    var need = [];
    t.same(result, need);
    t.end(); 
});

t('test-kmp-context', function(t) {
    var kmp = require('../src/kmp-matcher').kmp;
    var result = kmp('aabbaaccdsbbaab', 'a');
    var need = [0, 1, 4, 5, 12, 13];
    t.same(result, need);
    t.end(); 

});

t('test-kmp-7', function(t) {

    // Test for when the pattern is at the end of the string
    var result = kmp.kmp('ab123!', '3!');
    var need = [4];
    t.same(result, need);
    t.end(); 
});

t('test-kmp-8', function(t) {

    // Test for when the pattern size is equal to text size
    var result = kmp.kmp('asdfada', 'asdfada');
    var need = [0];
    t.same(result, need);
    t.end(); 
});

t('test-prefix-function-1', function(t) {
    var result = kmp.calcPrefixFunction('aabccaabcdeaac');
    var need = [0, 1, 0, 0, 0, 1, 2, 3, 4, 0, 0, 1, 2, 0];
    t.same(result, need);
    t.end();
});


