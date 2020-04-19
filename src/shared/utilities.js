export function checkValidity(value, rules){
    if(!rules){
        return true;
    }
    let isValid = true;
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLenght){
        isValid = value.trim().length >= rules.minLenght && isValid;
    }

    if(rules.maxLenght){
        isValid = value.trim().length <= rules.maxLenght && isValid;
    }

    if(rules.isEmail){
        const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        isValid = pattern.test(value) && isValid
    }


    return isValid;
}

