function hasTargetSum(array, target) {
  // Write your algorithm here
    // Write your algorithm here
      const seeNumbers = {}; 
      for(const item of array){
        const complement=target-item;
        if (seeNumbers[complement]) return true;
        seeNumbers[item]=true
      }
      return false;
    }
  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// hasTargetSum([3,8,12,4,11,7],10)
// hasTargetSum([22, 19, 4, 6, 30], 25);
// hasTargetSum([1, 2, 5], 4);

// /*/

/*
  Add written explanation of your solution here
*/
// if the target is inside the array, then it is false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
