var total = 0;
process.argv.forEach((element, index) => {
    if(index>=2) {
        total += +process.argv[index];
    }
});
console.log(total);