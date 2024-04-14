function fibonacciGenerator (n) {
    
    var startFib = [0,1];
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return startFib;
    }
    
    for (var fibLoop = 2; fibLoop < n; fibLoop ++) {
        var nextNum = startFib[fibLoop - 1] + startFib[fibLoop - 2];
        startFib.push(nextNum)
    }
    
    return startFib
    
}

