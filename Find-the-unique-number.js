const findUniq = arr => {
    for (el of arr) {
      if(arr.indexOf(el) === arr.lastIndexOf(el)) return el
    }
  }
