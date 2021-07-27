
function mapToNegativize(sourceArray){
    return sourceArray.map(el => el*(-1))
};

function mapToNoChange(sourceArray){
    return sourceArray.map(el=>el)
};
function mapToDouble(sourceArray){
    return sourceArray.map(el => el*2)
};

function mapToSquare(sourceArray){
    return sourceArray.map(el => el**2)
};

function reduceToTotal(sourceArray, startingPoint=0){
    return startingPoint + sourceArray.reduce(function(total,currentValue){
        total = total + currentValue
        return total
    })
};

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(accumulator,currentValue){
        accumulator = !!accumulator && !!currentValue
        return accumulator;
    })
};

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce(function(accumulator,currentValue){
        accumulator = !!accumulator || !!currentValue
        return accumulator;
    })
}
//reduceToAnyTrue([1, 2, true, "razmatazz", false])