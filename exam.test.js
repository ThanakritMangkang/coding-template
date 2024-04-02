var exam = require("./exam");

const reverseInput = [5, 12];
const reverseOutput = [2, 3];

const palindromeInput = ["abccba", "abccaa", "abbcca"];
const palindromeOutput = [
    "It's already a palindrome",
    "It can be a palindrome by changing only 1 character",
    "It cannot be a palindrome",
];

const zigzagInput = ["3 unitedstatesofamerica", "5 krungthepmahanakorn"];
const zigzagOutput = [
    ["u   e   a   o   e   a", " n t d t t s f m r c ", "  i   s   e   a   i  "],
    [
        "k       p       o  ",
        " r     e m     k r ",
        "  u   h   a   a   n",
        "   n t     h n     ",
        "    g       a      ",
    ],
];

describe("Test reverse function", () => {
    for (let i = 0; i < reverseInput.length; i++) {
        test(`reverse ${reverseInput[i]} to be ${reverseOutput[i]}`, () => {
            expect(exam.reverse(reverseInput[i])).toBe(reverseOutput[i]);
        });
    }
});

describe("Test palindrome function", () => {
    for (let i = 0; i < palindromeInput.length; i++) {
        test(`palindrome ${palindromeInput[i]} is ${palindromeOutput[i]}`, () => {
            expect(exam.palindrome(palindromeInput[i])).toBe(
                palindromeOutput[i]
            );
        });
    }
});

describe("Test zigZag function", () => {
    for (let i = 0; i < zigzagInput.length; i++) {
        test(`zigzag ${zigzagInput[i]} is ${zigzagOutput[i]}`, () => {
            expect(exam.zigZag(zigzagInput[i])).toEqual(zigzagOutput[i]);
        });
    }
});
