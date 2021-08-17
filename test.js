

/*jan(0) = 31
feb(1) = 28
mar(2) = 31
apr(3) = 30
may(4) = 31
jun(5) = 30
jul(6) = 31
aug(7) = 31
sep(8) = 30
oct(9) = 31
nov(10) = 30
dec(11) = 31
*/

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];i
let row5 = [];

function calculateDays(month){
  if(month === 1){
    return "28";
  }else if(month < 7){
    if(month % 2 === 0){
      return "31";
    }else{
      return "30";
    }
  }else if(month > 6 && month < 12){
    if(month % 2 === 1){
      return "31"
    }else{
      return "30"
    }
  }
}

console.log(calculateDays(0))
console.log(calculateDays(1))
console.log(calculateDays(2))
console.log(calculateDays(3))
console.log(calculateDays(4))
console.log(calculateDays(5))
console.log(calculateDays(6))
console.log(calculateDays(7))
console.log(calculateDays(8))
console.log(calculateDays(9))
console.log(calculateDays(10))
console.log(calculateDays(11))
