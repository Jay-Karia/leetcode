#include <stdio.h>

int searchInsert(int* nums, int numsSize, int target) {
  for (int i = 0; i < numsSize; i++) {
      if (nums[i] >= target)
        return i;
  }
  return numsSize;
}

int main (int argc, char *argv[]) {
  int n[] = {1, 3, 5, 6};
  printf("Case 1: %i\n", searchInsert(n, 4, 5));
  printf("Case 3: %i\n", searchInsert(n, 4, 2));
  printf("Case 4: %i\n", searchInsert(n, 4, 7));
  printf("Case 5: %i\n", searchInsert(n, 4, 4));
  printf("Case 5: %i\n", searchInsert(n, 4, 0));

    return 0;
}
