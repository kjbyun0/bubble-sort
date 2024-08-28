// function bubbleSort(arr) {
//   // type your code here
//   let bSwap = false;
//   do {
//     bSwap = false;
//     for (let i = 0; i < arr.length-1; i++) {
//       if (arr[i] > arr[i+1]) {
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//         bSwap = true;
//       }
//     }
//   } while (bSwap);

//   return arr;
// }

function bubbleSort(arr) {
  // type your code here
  let bSwap = true;
  while (bSwap) {
    bSwap = false;
    arr.forEach((elem, i) => {
      if (i < arr.length - 1 && elem > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        bSwap = true;
      }
    })
  }

  return arr;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  console.log("");
  console.log("Expecting: [1]");
  console.log("=>", bubbleSort([1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
