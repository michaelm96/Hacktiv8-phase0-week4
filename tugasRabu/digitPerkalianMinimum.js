function digitPerkalianMinimum(angka) {
    var newArr = []
    for(var i=0; i<=angka; i++){
        for(var j=0; j<=angka; j++){
            if(i * j == angka){
                newArr.push(i + "" + j);
            }
        }
    }
    var min = Infinity;
    for(var i = 0; i< newArr.length; i++){
        if(newArr[i].length<min){
            min = newArr[i].length;
        }
    }
    return min;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2