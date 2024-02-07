function deleteInvalids(array) {
    if (Array.isArray(array)===false) {
        return 'Invalid Array';
    }
    else{
        let newArray = [];
        for (const arr of array) {
            if(typeof arr === 'number' && !isNaN(arr)) {
                newArray.push(arr);
            }
            else{
                continue;
            }

            
        }
        return newArray;
    } 
    }
    console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));