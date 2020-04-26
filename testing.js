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
const getRandomNumber = () => {
    return Math.floor(1 + Math.random() * 9);
}

let flag = true, flagTwo = "pass", min_str = "", sub_str = "",array = [];
while(flag){
    array = [];
    if(min_str) min_str = "";
    if(sub_str) sub_str = "";
    for(let i = 0; i < 4; i++){
        do {
            var first = getRandomNumber();
            var second = getRandomNumber();
        } while (first === second);
        min_str += first;
        sub_str += second;
        first < second ? array.push(1) : array.push(0); 
        console.log(first," ",second);
        if(array.includes(0) && array.includes(1) && parseInt(min_str) > parseInt(sub_str)){
            flag = false;
        }
    }
}
console.log("array",array);
console.log("min",min_str);
console.log("sub",sub_str);
