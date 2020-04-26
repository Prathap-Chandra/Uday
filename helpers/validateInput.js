const validate = (input) => {
    const isValid = {
        questions: (input.questions && typeof(input.questions) === 'number' && input.questions > 0 && input.questions <= 10) ? true : false,
        digits: (input.digits && typeof(input.digits) === 'object' && (input.digits.minuend && typeof(input.digits.minuend) === 'number' && input.digits.minuend > 0 && input.digits.minuend <= 10) && (input.digits.subtrahend && typeof(input.digits.subtrahend) === 'number' && input.digits.subtrahend > 0 && input.digits.subtrahend <= 10) && input.digits.minuend >= input.digits.subtrahend) ? true : false,
        borrow: (typeof(input.borrow) === 'boolean') ? true : false
    }
    return (isValid.questions && isValid.digits && isValid.borrow) ? true : false;
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
        let borrow = input.borrow, multiple_choice = [];
        for(let i = 0; i < questions; i++){
            let min_str = "", sub_str = "";
            if(!borrow){
                for(let i = 0; i < subtrahend; i++){
                    let first = getRandomNumber();
                    let second = getRandomNumber();
                    if(first < second){
                        let temp = first;
                        first = second;
                        second = temp;
                    }
                    
                    min_str = first + min_str;
                    sub_str = second + sub_str;
                }
            }else{
                let flag = true, array = [];
                while(flag){
                    if(array) array = [];
                    if(min_str) min_str = "";
                    if(sub_str) sub_str = "";
                    for(let i = 0; i < subtrahend; i++){
                        do {
                            var first = getRandomNumber();
                            var second = getRandomNumber();
                        } while (first === second);
                        min_str += first;
                        sub_str += second;
                        first < second ? array.push(1) : array.push(0); 
                        console.log(first," ",second);
                        if(array.includes(0) && array.includes(1) && (parseInt(min_str) > parseInt(sub_str))){
                            flag = false;
                        }
                    }
                }
            }

            for(let i = min_str.length; i < minuend; i++){
                min_str = Math.floor(1 + Math.random() * 9) + min_str;
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
                "Subtrah": sub_str,
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