function cariMedian(arr) {

    // for(var i = 0; i<arr.length;i++){
    //     for (var j = 0; j < arr.length; j++) {
    //         if(arr[j] > arr[j+1]){
    //             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    //         }
    //     }
    // }
        if(arr.length % 2 == 0){
            var genap = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
            return genap
        }else{
            var ganjil = arr[arr.length / 2 - 0.5]
            return ganjil;
        }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7 WHY NOT 6?
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5