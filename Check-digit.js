function checkDigit(number, index1, index2, digit) {
    if(index1 > index2) { [index1, index2] = [index2, index1]}
    return (''+number).slice(index1, index2+1).indexOf(''+digit) > -1;
  }