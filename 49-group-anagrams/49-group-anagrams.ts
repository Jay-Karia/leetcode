function groupAnagrams(strs: string[]): string[][] {
  // Edge cases
  if (!strs.length) return [];

  // Use a Map where the key is the sorted string and value is an array of original strings
  const anagramMap = new Map<string, string[]>();

  // Process each string only once - O(n)
  for (const str of strs) {
    // Sort the characters to create a signature for this anagram group
    const sortedStr = str.split('').sort().join('');

    // Add to existing group or create new group
    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr)!.push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  // Return all the groups as an array
  return Array.from(anagramMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
console.log(groupAnagrams(["", ""])) // [["", ""]]
console.log(groupAnagrams(["stop","pots","reed","","tops","deer","opts",""])) // [["",""],["deer","reed"],["opts","pots","stop","tops"]]
