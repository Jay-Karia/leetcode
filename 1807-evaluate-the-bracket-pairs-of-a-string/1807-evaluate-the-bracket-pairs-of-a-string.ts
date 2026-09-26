// function replaceRanges(
//   original: string,
//   replacements: string[],
//   ranges: [number, number][]
// ): string {
//   const dict = ranges.map((range, index) => ({
//     start: range[0],
//     end: range[1] + 1,
//     text: replacements[index]
//   }));

//   dict.sort((a, b) => b.start - a.start);

//   let result = original;
//   for (const task of dict)
//     result = result.slice(0, task.start) + task.text + result.slice(task.end);

//   return result;
// }

// function evaluate(s: string, knowledge: string[][]): string {
//   let str = "";
//   const len = s.length;
//   let isOpen = false;
//   let inputKeys = [];
//   let inputSubstrings = [];
//   let key = "";
//   let openIndex;
//   const knowledgeKeys = [];
//   const knowledgeValues = [];

//   for (let i = 0; i < knowledge.length; i++) {
//     knowledgeKeys.push(knowledge[i][0])
//     knowledgeValues.push(knowledge[i][1])
//   }

//   for (let i = 0; i < len; i++) {
//     const char = s[i];
//     if (char === ")") {
//       isOpen = false;
//       inputKeys.push(key);
//       key = "";
//       inputSubstrings.push([openIndex, i - 1]);
//       openIndex = 0;
//     }

//     if (isOpen) key += s[i];

//     if (char === "(") {
//       isOpen = true;
//       openIndex = i + 1;
//     }
//   }

//   console.log(knowledgeValues, knowledgeKeys, inputSubstrings)
//   s = replaceRanges(s, knowledgeValues, inputSubstrings)

//   // Remove parenthesis
//   for (let i = 0; i < len - 1; i++) {
//     const char = s[i];
//     if (char === "(" || char === ")") continue
//     str += char;
//   }


//   return str;
// }

function evaluate (s: string, knowledge: string[][]) {
    const dict = new Map();
    for (const kd of knowledge) {
        dict.set(kd[0], kd[1]);
    }
    let addKey = false;
    let key = "";
    let res = "";
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "(") {
            addKey = true;
        } else if (c === ")") {
            if (dict.has(key)) {
                res += dict.get(key);
            } else {
                res += "?";
            }
            addKey = false;
            key = "";
        } else if (addKey) {
            key += c;
        } else {
            res += c;
        }
    }
    return res;
};

console.log(
  evaluate("(name)is(age)yearsold(test)", [
    ["name", "bob"],
    ["age", "two"],
    ["test", "some"]
  ])
); // bobistwoyearsold
