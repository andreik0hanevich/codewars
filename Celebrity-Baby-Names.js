function validName(array){
    let arr=[];
    for (let i=0;i<array.length-1;i++){
    if(array[i].slice(-1).toUpperCase()===array[i+1].slice(0,1)) arr.push(true)
    else{arr.push(false)}
    }
    return array.length===0?'You must test at least one name.':arr.every(v=>v===true)&&!arr.length==0?"Congratulations, your baby names are compatible!":
    array.length===1?'Congratulations, you can choose any name you like!'
    :"Back to the drawing board, your baby names are not compatible."
  }