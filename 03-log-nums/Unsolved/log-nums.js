// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    // start count at 1
    var output = 1;
    // for loop to iterate 1 through num 
    for (i = 0; i < num; i++) {
        // prints output 
        console.log(output);
        // output goes up by 1 after printing 
        output++;
    }
};