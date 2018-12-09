function LotsOfLeapYears(){
    var userYear = prompt("Enter a year: ");
    for (var i = 0; i <= userYear; i++){
        if((i % 400 === 0 && i % 100 === 0 && i % 4 === 0 && i < 2018) || (i % 4 === 0 && i % 400 != 0 && i % 100 != 0 && i < 2018)){
            console.log(i+" A.D. was a leap year.")
        }
        else if((i % 400 === 0 && i % 100 === 0 && i % 4 === 0 && i > 2018) || (i % 4 === 0 && i % 400 != 0 && i % 100 != 0 && i > 2018)){
            console.log(i+" A.D. will be a leap year.")
        }
        else if(i % 4 != 0 && i > 2018){
            console.log(i+" A.D. will not be a leap year.")
        }
        else
        {
            console.log(i+" A.D. was not a leap year.")
        }
    }
}