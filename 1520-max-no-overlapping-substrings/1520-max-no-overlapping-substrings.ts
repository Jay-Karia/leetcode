function maxNumOfSubstrings(s: string): string[] {
  let allSubstrings: string[] = []
  const len = s.length
  const freq: Record<string, [number, number]> = {}

  // Store the first and last occurrence of every character.
  for (let i = 0; i < len; i++) {
    const char = s[i]
    if (freq[char]) {
      freq[char][1] = i
    } else {
      freq[char] = [i, i]
    }
  }

  let end = -1

  for (let i = 0; i < len; i++) {
    // Only make a substring if we are at the first position of a character.
    if (freq[s[i]][0] !== i) continue

    // Now end the substring at the last of position of that character.
    let j = freq[s[i]][1]
    let canSelect = true

    // Now check whether every other characters all occurrences are inside this range
    for (let k = i; k <= j; k++) {
      // first and last are the positions of every other character
      const [first, last] = freq[s[k]]

      // if that character's first position is before the start of this substring, ignore
      if (first < i) {
        canSelect = false
        break
      }
      // if the character inside this loop appears again after the first character selected, then extend this substring to include that character's last position
      j = Math.max(j, last)
    }

    if (!canSelect) continue

    const substring = s.substring(i, j + 1)

    if (i > end) {
      allSubstrings.push(substring)
    } else {
      allSubstrings[allSubstrings.length - 1] = substring
    }
    end = j
  }

  return allSubstrings
}

console.log(maxNumOfSubstrings("adefaddaccc")) // ["e", "f", "ccc"]
console.log(maxNumOfSubstrings("abbaccd")) // ["bb", "cc", "d"]
