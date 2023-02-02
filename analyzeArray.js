function analyzeArray(array){
    let object = {};

    object["average"] = array.reduce((a, b) => a + b, 0) / array.length;
    object["length"] = array.length;
    object["min"] = Math.min(...array);
    object["max"] = Math.max(...array);

    return object;
}

module.exports = analyzeArray;