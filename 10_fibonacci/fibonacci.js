const fibonacci = (num) => {
    
    // Always converts num to a number
    num = Number(num);

    // Returns "OOPS" if num is smaller than zero
    if (num < 0) return "OOPS"
    else if (num <= 1) return num;

    let prev = 0, current = 1;

    for (let i = 2; i <= num; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};


// Do not edit below this line
module.exports = fibonacci;
