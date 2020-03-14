function cariModus(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var counter = 0
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++
                newArr.push(arr[i])
            }
        } if (counter + 1 == arr.length) {
            return -1
        }
    }
    if (newArr.length == 0) return -1
    return newArr[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1