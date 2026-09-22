// function removeElement(nums: number[], val: number): any {
//   const len = nums.length;
//   let first = []
//   for (let i = 0; i < len; i++) {
//     if (nums[i] !== val) {
//       first.push(nums[i])
//     }
//   }

//   return first;
// };

var removeElement = function(nums:number[], val:number): any {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log(removeElement([3, 2, 2, 3], 3)) // [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // [0, 1, 3, 0, 4]
