function recursionFunc(x) {
    if (x < 10) {
        console.log('Ending recursive execution...');
        return 1; // Originally tried break here? 
    } else {
        
        console.log('x value ' + x);
        x = x - 1
        recursionFunc(x);
    }
}

recursionFunc(10000);
// Should count down from 100? 