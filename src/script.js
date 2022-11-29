// This file contains code that is part of “kmp-matcher” which is released under the MIT License as cited below. See the LICENSE file for more information or go to https://opensource.org/licenses/MIT for full license details.
// Badge, T (2016) kmp-matcher [Code Base]. https://github.com/guliash/kmp-matcher
/**
 * Copyright (c) 2022 Hemashushu <hippospark@gmail.com>, All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/*
This file contains code that is part of “tt-boyer-moore-js” which is released under the MIT License. 
See the LICENSE file for more information or go to https://opensource.org/licenses/MIT for full license details.
Unknown (2021) tt-boyer-moore-js [Code Base]. https://github.com/tealtadpole/tt-boyer-moore-js
*/


// Initiate KMP button
const KMP_btn = document.getElementById("KMP_btn");

KMP_btn.addEventListener("mouseover" ,() => {
    KMP_btn.classList.toggle("active");
});

KMP_btn.addEventListener("mouseout" , () => {
    KMP_btn.classList.toggle("active");
});

// Activate KMP search algorithm upon click
KMP_btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    document.getElementById("o").style.display = "block";

    // Obtain user input text and pattern
    const text = document.getElementById("t").value;
    const pattern = document.getElementById("p").value;
    
    // Check for invalid inputs
    if(text == "" || pattern == ""){
        document.getElementById("o").innerHTML += `Invalid Input.<br>Enter both a text and a pattern.`;
    }
    if (pattern.length > text.length) {
        document.getElementById("o").innerHTML += `Invalid Input.<br>The pattern is longer than the text.<br>`;   
    }

    else{
        // Start timestamp
        const start_KMP = performance.now();
        
        // Run KMP match algorithm, with input text and pattern
        KMP_match(text,pattern);
        
        // End timestamp
        const end_KMP = performance.now();
        // Show the performace time
        document.getElementById("o").innerHTML += `Performance time: ${(end_KMP - start_KMP).toFixed(2)} milliseconds.`;
    }
});

// Initiate Rabin karp button
const Rabin_btn = document.getElementById("Rabin_btn");

Rabin_btn.addEventListener("mouseover" ,() => {
    Rabin_btn.classList.toggle("active");
});

Rabin_btn.addEventListener("mouseout" , () => {
    Rabin_btn.classList.toggle("active");
});

// Activate Rabin Karp search algorithm upon click 
Rabin_btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    document.getElementById("o").style.display = "block";

    // Obtain user input text and pattern
    const text = document.getElementById("t").value;
    const pattern = document.getElementById("p").value;

    // Check for invalid inputs
    if(text == "" || pattern == ""){
        document.getElementById("o").innerHTML += `Invalid Input.<br>Enter both a text and a pattern.`;
    }
    if (pattern.length > text.length) {
        document.getElementById("o").innerHTML += `Invalid Input.<br>The pattern is longer than the text.<br>`;   
    }
    else{
        // Start timestamp
        const start = performance.now();
        
        // Run Rabin Karp match algorithm, with input text and pattern
        Rabin_Karp_match(text,pattern);

        // End timestamp
        const end = performance.now();
        // Show the performace time
        document.getElementById("o").innerHTML += `Performance time: ${(end - start).toFixed(2)} milliseconds.`;
    }
});

// Initiate Boyer Moore button
const Boyer_btn = document.getElementById("Boyer_btn");

Boyer_btn.addEventListener("mouseover" ,() => {
    Boyer_btn.classList.toggle("active");
});

Boyer_btn.addEventListener("mouseout" , () => {
    Boyer_btn.classList.toggle("active");
});

// Activate Boyer Moore search algorithm upon click 
Boyer_btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    document.getElementById("o").style.display = "block";

    // Obtain user input text and pattern
    const text = document.getElementById("t").value;
    const pattern = document.getElementById("p").value;
    // Check for invalid inputs
    if(text == "" || pattern == ""){
        document.getElementById("o").innerHTML += `Invalid Input.<br>Enter both a text and a pattern.`;
    }
    if (pattern.length > text.length) {
        document.getElementById("o").innerHTML += `Invalid Input.<br>The pattern is longer than the text.<br>`;   
    }
    else{
        // Start timestamp
        const start = performance.now();

        // Run Boyer Moore match algorithm, with input text and pattern
        boyerMooreSearch(text,pattern);

        // End timestamp
        const end = performance.now();
        document.getElementById("o").innerHTML += `Performance time: ${(end - start).toFixed(2)} milliseconds.`;
    }
});

// Initiate the button for running all algorithms
const All_btn = document.getElementById("All_btn");

All_btn.addEventListener("mouseover" ,() => {
    All_btn.classList.toggle("active");
});

All_btn.addEventListener("mouseout" , () => {
    All_btn.classList.toggle("active");
});

All_btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    document.getElementById("o").style.display = "block";

    // Obtain user input text and pattern
    const text = document.getElementById("t").value;
    const pattern = document.getElementById("p").value;

    // Check for invalid inputs
    if(text == "" || pattern == ""){
        document.getElementById("o").innerHTML += `Invalid Input.<br>Enter both a text and a pattern.`;
    }
    if (pattern.length > text.length) {
        document.getElementById("o").innerHTML += `Invalid Input.<br>The pattern is longer than the text.<br>`;   
    }
    else{
        // Start timestamp
        const start_KMP = performance.now();
        
        // Run KMP match algorithm, with input text and pattern
        document.getElementById("o").innerHTML += `Finding KMP match...<br>`;
        KMP_match(text,pattern);
        
        // End timestamp
        const end_KMP = performance.now();

        document.getElementById("o").innerHTML += `KMP performance time: ${(end_KMP - start_KMP).toFixed(2)} milliseconds.<br>`;
        document.getElementById("o").innerHTML += `----------------------------------------------------------------------------<br>`;

        // Start timestamp
        const start_Rabin = performance.now();
        
        // Run Rabin Karp match algorithm, with input text and pattern
        document.getElementById("o").innerHTML += `<br>Finding Rabin Karp match...<br>`;
        Rabin_Karp_match(text,pattern);

        // End timestamp
        const end_Rabin = performance.now();
        document.getElementById("o").innerHTML += `Rabin Karp performance time: ${(end_Rabin - start_Rabin).toFixed(2)} milliseconds.<br>`;
        document.getElementById("o").innerHTML += `----------------------------------------------------------------------------<br>`;

        // Start timestamp
        const start_Boyer = performance.now();

        // Run Boyer Moore match algorithm, with input text and pattern
        document.getElementById("o").innerHTML += `<br>Finding Boyer Moore match...<br>`;
        boyerMooreSearch(text,pattern);

        // End timestamp
        const end_Boyer = performance.now();
        document.getElementById("o").innerHTML += `Boyer Moore performance time: ${(end_Boyer - start_Boyer).toFixed(2)} milliseconds.`;
    }
});

// Initiate button for visualizing the performance chart
const Performance_btn = document.getElementById("Performance_btn");

Performance_btn.addEventListener("mouseover" ,() => {
    Performance_btn.classList.toggle("active");
});

Performance_btn.addEventListener("mouseout" , () => {
    Performance_btn.classList.toggle("active");
});

Performance_btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    document.getElementById("o").style.display = "none"
    
    // The string patterns for testing
    const strings_patterns = 
    [['abcd','abc'],['123abcd','abc'],['sfaabcdadca','abc'],['abcdadsc','abc'],['refaabcd','abc'],['vabcda','abc'],
    [';!abcd',';!'],[';!123abcd;!',';!'],['sfaab;!cdadca',';!'],['12abcdadsc','12'],['refa12abcd','12'],['vabcda12','12'],
    ['123;!abcd','ab'],[';!123abcd;!','cd'],['adc12323eafaesfaab;!cdadca','eaf'],['aadfaaaaaaa12abcdadsc','a'],['refa12abcdadca','dad'],
    ['vabcda12adcaadcacadcad','12adcaadcacadcad'],['vafvavavvdf12adcaadcacadcadadvabcda12adcaadcacadcad','12adcaadcacadcad'],
    ['vabcda12adcaadcacadcad12adcaadcacadcadfvfvadfv','12adcaadcacadcadfvfvadfv'], ['abcd','abc'],['123abcd','abc'],['sfaabcdadca','abc'],['abcdadsc','abc'],['refaabcd','abc'],['vabcda','abc'],
    [';!abcd',';!'],[';!123abcd;!',';!'],['sfaab;!cdadca',';!'],['12abcdadsc','12'],['refa12abcd','12'],['vabcda12','12'],
    ['123;!abcd','ab'],[';!123abcd;!','cd'],['adc12323eafaesfaab;!cdadca','eaf'],['aadfaaaaaaa12abcdadsc','a'],['refa12abcdadca','dad'],
    ['vabcda12adcaadcacadcad','12adcaadcacadcad'],['vafvavavvdf12adcaadcacadcadadvabcda12adcaadcacadcad','12adcaadcacadcad'],
    ['vabcda12adcaadcacadcad12adcaadcacadcadfvfvadfv','12adcaadcacadcadfvfvadfv'], ['abcd','abc']]

    // time belongs on the x axis 
    // Result list declaration
    let results_kmp = [0]
    let results_booyer_moore = [0]
    let results_rabin_karp = [0]

    // number of patters on the y axis
    let x_axis = []


    // KMP
    for (let i = 1; i < strings_patterns.length; i++) {
        // Start timestamp
        start1 = performance.now() 

        // Run Rabin Karp match
        Rabin_Karp_match(strings_patterns[i][0], strings_patterns[i][1])
        
        // End timestamp
        end1 = performance.now() 
        timer1 = end1 - start1

        // storing the results
        x_axis.push(i.toString())
        results_rabin_karp.push(results_rabin_karp[i - 1] + timer1)
      }


    //Rabin Karp
    for (let i = 1; i < strings_patterns.length; i++) {
        // Start timestamp
        start2 = performance.now() 

        // Run KMP match
        KMP_match(strings_patterns[i][0],strings_patterns[i][1])

        // End timestamp
        end2 = performance.now() 
        timer2 = end2 - start2

        // storing the results
        results_booyer_moore.push(results_booyer_moore[i - 1] + timer2)
      }

    //Boyer Moore
    for (let i = 1; i < strings_patterns.length; i++) {
        // Start timestamp
        start3 = performance.now() 
        
        // Run Boyer Moore search
        boyerMooreSearch(strings_patterns[i][0],strings_patterns[i][1])

        // End timestamp
        end3 = performance.now() 
        timer3 = end3 - start3

        // storing the results
        results_kmp.push(results_kmp[i - 1] + timer3)
      }

    // Declare the performance chart mat
    var speedCanvas = document.getElementById("speedChart");
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    // declaring data variables
    var data1 = {
        label: "KMP",
        data: results_kmp,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };

    var data2 = {
        label: "Rabin-Karp",
        data: results_rabin_karp,
        lineTension: 0,
        fill: false,
      borderColor: 'blue'
      };

    var data3 = {
        label: "Boyer Moore",
        data: results_booyer_moore,
        lineTension: 0,
        fill: false,
      borderColor: 'green'
      };

    var speedData = {
      labels: x_axis,
      datasets: [data1, data2, data3]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      } 
    };

    // create chart canvas
    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });
});

// calculating prefix for KMP match
// Input: pattern (str)
// output: prefix (list)
function calcPrefixFunction(p){
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
}

// KMP match algorithm
// Input: text (str), pattern (str)
// Output: If match, output the matching index on the webpage; If not, shows "No match"
function KMP_match(text, pattern){
    s = text;
    p = pattern;
    var n = s.length;
    var m = p.length;
    var prefix = calcPrefixFunction(p);
    var res = [];
    var q = 0;

    // for each character within the input text
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
    
    // Output the final results on the webpage
    for(var i = 0; i < res.length; i++){
        document.getElementById("o").innerHTML += `Matches from index ${res[i]} to index ${res[i] + m - 1}<br>`;
    }
    if(res.length == 0)
        document.getElementById("o").innerHTML += `No match found.<br>`;

}

// Convert each characters within the input string into its ASCII code
// Input: a string
// Output: a list of ASCII codes
function stringToCodePoints(str) {
    let codePoints = [];
    for (let c of str) {
        codePoints.push(c.codePointAt(0));
    }
    return codePoints;
}

// Rabin Karp algorithm
// Input: text (str), pattern (str)
// Output: If match, output the matching index on the webpage; If not, shows "No match"
function Rabin_Karp_match(text , pattern){
    testStr = text
    keywordStr = pattern

    // convert input text into a list of ASCII codes
    let testCodePoints = stringToCodePoints(testStr);
    let testLength = testCodePoints.length;

    // convert input pattern into a list of ASCII codes
    let keywordCodePoints = stringToCodePoints(keywordStr);
    let keywordLength = keywordCodePoints.length;

    // Calculate hash for each letter
    const base = 256;  
    const prime = 101; 
    let height = 1;

    // height is the weight for the letter at highest degree 
    for (let i = 0; i < keywordLength - 1; i++) {
        height = (height * base) % prime;
    }

    let kValue = 0;  // Hash value for the current character within pattern
    let tValue = 0;  // hash value for the current character within text

    for (let i = 0; i < keywordLength; i++) {
        kValue = (kValue * base + keywordCodePoints[i]) % prime;
        tValue = (tValue * base + testCodePoints[i]) % prime;
    }


    let idx = 0;
    let count = testLength - keywordLength;
    let results = []

    while (idx <= count) {
        // when hash values are the same for the keyword and the text, 
        if (tValue === kValue) {
            let checkIdx = 0;
            // check if each character in the keyword and the text section are the same
            for (; checkIdx < keywordLength; checkIdx++) {
                if (testCodePoints[idx + checkIdx] !== keywordCodePoints[checkIdx]) {
                    break;
                }
            }

            // this means we found a match! 
            if (checkIdx === keywordLength) {
                results.push(idx)
            }
        }

        // slide to the next letter, if hash values and/or keyword and text section do not match
        if (idx < count - 1) {
            tValue = ((tValue - testCodePoints[idx] * height) * base + testCodePoints[idx + keywordLength]) % prime;

            if (tValue < 0) {
                tValue += prime;
            }
        }
        idx++; 
    }
    
    // Output the final results on the webpage
    for(var i = 0; i < results.length; i++){
        document.getElementById("o").innerHTML += `Matches from index ${results[i]} to index ${results[i] + keywordLength - 1}<br>`;
    }
    if(results.length == 0)
        document.getElementById("o").innerHTML += `No match found.<br>`;
    return;
}

    
// bad match table: table based on the bad char rule of shifting a string to the right 
// Input: pattern (str)
// Output: table (list of ASCII codes)
const makeBadCharTable = (pattern) => {
    // charCodeAt has maximum value of 65535, which from 2^16 - 1
    const table = Array(65536).fill(pattern.length)
    
    // update table with ASCII code for each matching character
    for(let i=0; i<pattern.length-1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i
    }
    return table
}

// check if the input index within the pattern is a prefix
// Input: pattern (str), index (int)
// Output: Boolean
const isPrefix = (pattern, index) => {
    for (let i=index, j=0; i<pattern.length; i++, j++) {
        return (pattern[i] === pattern[j])
    }
}

// calculating the length for suffix beginning from the input index within the pattern
// Input: pattern (str), index (int)
// Output: len (int)
const suffixLength = (pattern, index) => {
    let len=0;
    for (let i=index, j=pattern.length - 1; i>= 0 && pattern[i] === pattern[j]; i--, j--) {
        len += 1
    }
    return len;
} 

// Based on the good suffix heuristic, where we shift the keyword to the right, such that the matched 
// suffix is aligned with another occurence of the same suffix in the keyword 
// Input: pattern (str)
// Output: table (list of int)
const makeGoodSuffixTable = (pattern) => {
    let table = Array(pattern.length).fill(0)
    let prefixIndex = pattern.length;

    for (let i=pattern.length; i > 0; i--) {
        if (isPrefix(pattern, i)) {
            prefixIndex = i
        }
        table[pattern.length - i] = prefixIndex - 1 + pattern.length
    }
    
    for (let i=0; i<pattern.length - 1; i++) {
        const suffLength = suffixLength(pattern, i)
        table[suffLength] = pattern.length - 1 - i + suffLength
        table[suffLength] = table[suffLength] > pattern.length ? pattern.length : table[suffLength]
    }
    return table
}


// Boyer Moore algorithm
// Input: text (str), pattern (str)
// Output: If match, output the matching index on the webpage; If not, shows "No match"
const boyerMooreSearch = (text, pattern) => {
    let index = 0
    let results = []

    // Specifying the starting index, ensure the index to be non negative
    const startIndex = Math.floor(index < 0 ? 0 : index)

    if (pattern === "") {
        //return startIndex < text.length ? startIndex : text.length
    }

    // Making the bad match table and the good suffix table
    let charTable = makeBadCharTable(pattern);
    let offsetTable = makeGoodSuffixTable(pattern);
    
    // for each shift, we verify if the last letter within the section is the same as the keyword, 
    // then work our way to the first element. 
    for (let i=pattern.length - 1 + Math.floor(startIndex); i < text.length; ) {
        let j = pattern.length - 1
        // compare the keyword and text subsections
        while (pattern[j] === text[i]) {
            // all characters matched, which means we found a match!!!!!
            if (j === 0){
                // store the result into a list
                results.push(i)
                break
            } 
            i--
            j--
        }

        const charCode = text.charCodeAt(i);
        // determine the shifting amount
        const deltai = Math.max(offsetTable[pattern.length - 1 - j], charTable[charCode])
        // Obtain the next shift size
        i+= deltai
    }
    
    // Output the final results on the webpage
    for(var i = 0; i < results.length; i++)
        document.getElementById("o").innerHTML += `Matches from index ${results[i]} to index ${results[i] + pattern.length-1}<br>`;
    if(results.length == 0)
        document.getElementById("o").innerHTML += `No match found.<br>`;
}





