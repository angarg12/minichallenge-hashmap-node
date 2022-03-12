const Solution = require("../src/solution");

describe('Solution test', () => {
    it('is correct', () => {
        let solution = new Solution();
        let nums = [2, 7, 11, 15];
        let target = 9;
        expect (solution.twoSum(nums, target)).toEqual([0, 1]);
        nums = [3, 2, 4];
        target = 6;
        expect (solution.twoSum(nums, target)).toEqual([1, 2]);
        nums = [3, 3];
        target = 6;
        expect (solution.twoSum(nums, target)).toEqual([0, 1]);
    });

    it('large input', () => {
        let solution = new Solution();
        let nums = [];
        let target = 19999;

        for (let i = 1; i <= 200000; i++) {
            nums.push(i);
        }
        expect (solution.twoSum(nums, target)).toEqual([9998, 9999]);
    });
  });