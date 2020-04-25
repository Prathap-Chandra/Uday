// let minuend = 4, subtrahend = 4;
// let min_str = "", sub_str = "";

// let first = 0, second = 0;
// for(let i = 0; i < subtrahend; i++){
//     do {
//         first = Math.floor(1 + Math.random() * 9);
//         second = Math.floor(1 + Math.random() * 9)
//     } while (first < second);
//     min_str += first; sub_str += second;
// }

// for(let i = min_str.length; i < minuend; i++){
//     min_str += Math.floor(1 + Math.random() * 9)
// }

// console.log("min_str ",typeof min_str,min_str);
// console.log("sub_str ",typeof sub_str,sub_str);

/* ****************************************************************************** */ 
let minuend = 4, subtrahend = 4;
let min_str = "", sub_str = "";
let flag = "checked";
let first = 0, second = 0, min = 0, sub = 0;

let arr = [];
do {
    for(let i = 0; i < subtrahend; i++){
        first = Math.floor(1 + Math.random() * 9);
        second = Math.floor(1 + Math.random() * 9);
        min_str += first;
        sub_str += second;
        first < second ? arr.push(1) : arr.push(0);
    }
} while (arr.includes(0) && arr.includes(1));

for(let i = min_str.length; i < minuend; i++){
    min_str += Math.floor(1 + Math.random() * 9)
}

console.log("min_str ",typeof min_str,min_str);
console.log("sub_str ",typeof sub_str,sub_str);
