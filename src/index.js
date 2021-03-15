module.exports = function toReadable (number) {

    if(number == 0){
      return "zero";
  }
  return g(number);

}

function g(number) {
    let x = number + ""
    let res = "";
    let offset = 0;
    if(x.length > 3){
        res += getThousands(x.slice(offset,offset + x.slice(0,-3).length));
        offset += x.slice(0,-3).length;
    }
    if(x.length > 2){
        res += getHundreds(x.slice(offset,offset + 1));
        offset++;
    }
    if(x.length > 1)
    {
      x = x.slice(offset, offset + 2);
      res += (x[0]>1? getTens(x[0]) + getOnes(x[1]) : getSpecialTens(x[0]+x[1]));
    }
    else {
        res += getOnes(x[0]);
    }
  
    return  res.trim();
}

function getOnes(x){
    let ones = {
        "0": "",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
    }
    return ones[x]  + " ";
}

function getSpecialTens(x){
    if(x.startsWith("0")) {
        return getOnes(x[1]);
    }
    let specialTens = {
        "10": "ten", 
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
    }
    return specialTens[x]  + " ";
}

function getTens(x){
    tens = {
        "0": "",
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
        }
    return tens[x] + " ";
}
function getHundreds(x){

    return getOnes(x) + "hundred ";    
}
function getThousands(x){
    
    return g(x) + " thousand ";
}
