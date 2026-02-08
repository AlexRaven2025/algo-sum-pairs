def sum_pairs(array, target):
    seenNumbers = set()
    for currentNumber in array:
        missingNum = target - currentNumber
        if(missingNum in seenNumbers):
            return [missingNum, currentNumber]
        seenNumbers.add(currentNumber)
    return "unable to find pairs"