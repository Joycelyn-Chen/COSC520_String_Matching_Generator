# String Matching Generator
- This module contains three string matching methods:
1. KMP
2. Rabin Karp
3. Boyer Moore

## Implementation
### Initial setup
- run `npm install` to install all the dependencies.

### Algorithm implementation
- To launch the visualization of the program, open the file under folder `<string-matching-root>/src/index.html` with your favorite browser, then the user interface will show up in the browser. 

### Steps to search for the pattern
1. Within the interface, input the source text string on the left, and the desired pattern on the right side. 
2. Choose one specific algorithm by clicking the button with the algorithm name on it. Or choose the `All` button to receive result from all three algorithms.
3. The result will be printed in the text box below the buttons. 

## Unittest
- Testing the KMP algorithm: execute `npm run test-kmp`
- Testing the Boyer-Moore algorithm: execute `npm run test-boyer`

### Notice
- Testing the Rabin-Karp algorithm: execute `npm run test-rabin`
- Ensure `"type": "module"` is listed within `package.json` file
- Eg. `package.json` for testing rabin karp algorithm
```
{
    ...

    "type": "module"
}
```
> Be sure to remove the above line when you are testing KMP and Boyer-Moore algorithm. 



## References
- [Badge, T (2016) kmp-matcher [Code Base].](https://github.com/guliash/kmp-matcher)
- [Unknown (2021) tt-boyer-moore-js [Code Base].](https://github.com/tealtadpole/tt-boyer-moore-js)
- [Shushu, H  (2022) js-rabin-karp-matcher [Code Base].](https://github.com/hemashushu/js-rabin-karp-matcher)

