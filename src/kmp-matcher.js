// This file contains code that is part of “kmp-matcher” which is released under the MIT License as cited below. See the LICENSE file for more information or go to https://opensource.org/licenses/MIT for full license details.
// Badge, T (2016) kmp-matcher [Code Base]. https://github.com/guliash/kmp-matcher

(function() {
    var kmp_matcher = {
        kmp: function(s, p) {
            var n = s.length;
            var m = p.length;
            var prefix = kmp_matcher.calcPrefixFunction(p);
            var res = [];
            var q = 0;
            for(var i = 0; i < n; i++) {
                while(q > 0 && p[q] != s[i]) {
                    q = prefix[q - 1];
                }
                if(p[q] == s[i]) {
                    ++q;
                }
                if(q == m) {
                    res.push(i - m + 1);
                    q = prefix[q - 1];
                }
            }
            return res;
        },
        calcPrefixFunction: function(p) {
            var n = p.length;
            var prefix = [];
            var q = 0;
            prefix.push(q);
            for(var i = 1; i < n; i++) {
                while(q > 0 && p[q] != p[i]) {
                    q = prefix[q - 1];
                }
                if(p[q] == p[i]) {
                    ++q;
                }
                prefix[i] = q;
            }
            return prefix;
        },
    };
    if (typeof define === 'function' && define.amd) define(function() { return kmp_matcher; });
    else if (typeof module !== 'undefined') module.exports = kmp_matcher;
    else if (typeof self !== 'undefined') self.kmp_matcher = kmp_matcher;
    else window.kmp_matcher = kmp_matcher;
})();
