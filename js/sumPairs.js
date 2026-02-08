exports.sumPairs = function(array, target) {
   let seenNumbers = new Set();
   for (let value of array){
    let missingNum = target - value;
    if (seenNumbers.has(missingNum)){
        return [missingNum,value]
    }else{
        seenNumbers.add(value)
    }   
   };
   return 'unable to find pairs';
};


// console.log(sumPairs([1,2,3,6,4,5,9,8], 10));