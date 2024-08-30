/*
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.
 */

/*
 * The count and say sewuence is a recursive sequence where each term describes the preevious term. We need to genereat the nth teren of this sequence
 *
 * BRUTE FORCE:
 *  -> generate all terms from 1 to n, but this nsn't necessary as we only need the nth ternm
 *
 * EFFIECIENT APPROACH:
 *  -> recursively generate the nth term, using ahelper function to perform the count-and-say opertaion on each term
 *
 * */

class Solution {
  countAndSay(n: number): string {
    // Base Case
    if (n === 1) return "1";

    const prevTerm = this.countAndSay(n - 1);
    return this.generateNextTerm(prevTerm);
  }

  private generateNextTerm(term: string): string {
    let result = "";
    let count = 1;
    let currentChar = term[0];

    for (let i = 1; i <= term.length; i++) {
      if (i < term.length && term[i] === currentChar) {
        count++;
      } else {
        result += count + currentChar;
        currentChar = term[i];
        count = 1;
      }
    }

    return result;
  }
}
