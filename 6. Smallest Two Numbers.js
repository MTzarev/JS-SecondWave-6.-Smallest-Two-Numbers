function smallestTwoNumbers(nums) {
   
    let sortedNums = nums.sort((a, b) => a - b);
    console.log(sortedNums.slice(0, 2).join(` `));

}
smallestTwoNumbers([30, 15, 50, 5]);
