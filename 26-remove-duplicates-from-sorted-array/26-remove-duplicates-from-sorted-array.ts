// function removeDuplicates(nums: number[]): number {
//   const len = nums.length;
//   let curr = nums[0];
//   let k = 0;
//   let a = 1;
//   let newArr = []
//   newArr.push(nums[0])

//   for (let i = 1; i < len; i++) {
//       if (nums[i] === curr) {
//         k++;
//       } else {
//         curr = nums[i]
//         newArr[a] = nums[i]
//         a++;
//       }
//   }

//   nums = newArr
//   console.log(nums)

//   return len - k;
// };

function removeDuplicates (nums:number[]): number {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};

console.log(removeDuplicates([1, 1, 2])) // 2, nums = [1, 2, ..]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5, nums = [0, 1, 2, 3, 4, ...]
