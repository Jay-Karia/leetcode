// function scoreOfParentheses(s: string): number {
//   const len = s.length;

//   let score = 0;
//   let counter = 1;
//   let max = 0;
//   let innerCounter = 0;
//   let next;

//   for (let i = 1; i < len; i++) {
//     const char = s[i];
//     if (char === "(") {
//       counter++;
//     }
//     else if (char === ")") {
//       if (s[i+1] === ")")
//         next = "*"
//       else if (s[i+1] === "(")
//         next = "+"
//       if (counter > max)
//         max = counter;
//       console.log("bracket closed", innerCounter, next)
//       counter--;
//     }
//   }

//   return score;
// };

function scoreOfParentheses(s: string): number {
    let start: number[] = [];
    let score = 0;

    for(let ch of s) {
        if(ch === '(') {
            start.push(score);
            score = 0;
        }
        else {
            score = start.pop() + Math.max(score * 2, 1);
        }
    }

    return score;
};

console.log(scoreOfParentheses("()")) // 1
console.log(scoreOfParentheses("(())")) // 2
console.log(scoreOfParentheses("()()")) // 2
console.log(scoreOfParentheses("(()(()))")) // 6
console.log(scoreOfParentheses("(()())"))
