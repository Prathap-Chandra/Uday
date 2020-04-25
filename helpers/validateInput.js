const validate = (input) => {
    const isValid = {
        questions: (input.questions && typeof(input.questions) === 'number' && input.questions > 0 && input.questions <= 10) ? true : false,
        digits: (input.digits && typeof(input.digits) === 'object' && (input.digits.minuend && typeof(input.digits.minuend) === 'number' && input.digits.minuend > 0 && input.digits.minuend <= 10) && (input.digits.subtrahend && typeof(input.digits.subtrahend) === 'number' && input.digits.subtrahend > 0 && input.digits.subtrahend <= 10) && input.digits.minuend >= input.digits.subtrahend) ? true : false,
        borrow: (input.borrow && typeof(input.borrow) === 'boolean') ? true : false
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
    for(let i = 0; i < 4; i++){
        options.push(Math.floor(Math.random() * (max - min) + min));
    }
    return options;
}

const generateQuestions = (input) => {
    if(validate(input)){
        let questions = input.questions;
        let minuend = input.digits.minuend;
        let subtrahend = input.digits.subtrahend;
        let borrow = input.borrow;
        let multiple_choice = [];
        for(let i = 0; i < questions; i++){
            let valOne = getRandomNum(minuend);
            let valTwo = getRandomNum(subtrahend);
            let correct_answer = valOne - valTwo 
            multiple_choice.push({
                "Minuend": valOne,
                "Subtrahend": valTwo,
                "Correct Answer": correct_answer,
                "Options": getRandomArbitrary(correct_answer - 120 , correct_answer + 120)
            })
        }
        return multiple_choice;
    }else{
        return false;
    }
}

module.exports = generateQuestions;