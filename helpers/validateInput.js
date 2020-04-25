const validate = (input) => {
    const isValid = {
        questions: (input.questions && typeof(input.questions) === 'number' && input.questions > 0 && input.questions <= 10) ? true : false,
        digits: (input.digits && typeof(input.digits) === 'object' && (input.digits.minuend && typeof(input.digits.minuend) === 'number' && input.digits.minuend > 0 && input.digits.minuend <= 10) && (input.digits.subtrahend && typeof(input.digits.subtrahend) === 'number' && input.digits.subtrahend > 0 && input.digits.subtrahend <= 10) && input.digits.minuend >= input.digits.subtrahend) ? true : false,
        borrow: (typeof(input.borrow) === 'boolean') ? true : false
    }
    return (isValid.questions && isValid.digits && isValid.borrow) ? true : false;
}

const getRandomNum = (len) => {
    let add = 1, mul = 9;
    if(len > 1){
        add = Math.pow(10,len-1);
        mul = Math.pow(10,len-1) * 9;
    }
    return Math.floor(add + Math.random() * mul);
}

const getRandomArbitrary = (min, max) => {
    let options = [];
    for(let i = 0; i < 3; i++){
        options.push(Math.floor(Math.random() * (max - min) + min));
    }
    return options;
}

const getRandomNumber = () => {
    return Math.floor(1 + Math.random() * 9);
}

const generateQuestions = (input) => {
    if(validate(input)){
        let questions = input.questions, minuend = input.digits.minuend, subtrahend = input.digits.subtrahend;
        let borrow = input.borrow, multiple_choice = [], valOne, valTwo, flag = true, strOne, strTwo, noNegative;
        let min_str = "", sub_str = "";
        let first = 0, second = 0;
        for(let i = 0; i < questions; i++){
            if(!borrow){
                for(let i = 0; i < subtrahend; i++){
                    do {
                        first = getRandomNumber();
                        second = getRandomNumber();
                    } while (first < second);
                    min_str += first; sub_str += second;
                }
                
                for(let i = min_str.length; i < minuend; i++){
                    min_str += getRandomNumber();
                }
            }else{
                do {
                    valOne = getRandomNum(minuend); strOne = valOne.toString().split("");
                    valTwo = getRandomNum(subtrahend); strTwo = valTwo.toString().split("");
                    for(let i = strTwo.length - 1; i >=0; i--){
                        if(parseInt(strOne[i]) < parseInt(strTwo[i])) flag = false;
                    }
                    console.log(typeof strOne, strOne ,"strOne");
                    console.log(typeof strTwo, strTwo, "strTwo")
                    console.log("valOne > valTwo ",valOne > valTwo)
                    console.log("flag ",flag)
                } while (flag || (valOne < valTwo));
                return "Sorry";
            }
            min_str = parseInt(min_str);
            sub_str = parseInt(sub_str);
            let correct_answer = min_str - sub_str;
            let max = correct_answer + 120, min = (correct_answer - 120 > 0) ? correct_answer - 120 : 0;  
            let options = getRandomArbitrary(min, max);
            options.push(correct_answer);
            options.sort(() => Math.random() - 0.5);
            multiple_choice.push({
                "Minuend": min_str,
                "Subtrahend": sub_str,
                "Correct Answer": correct_answer,
                "Options": options
            })
        }
        return multiple_choice;
    }else{
        return false;
    }
}

module.exports = generateQuestions;