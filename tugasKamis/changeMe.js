function changeMe(arr) {
    var str = ""
    var obj = {}
    if(arr.length <= 0){
        console.log('""')
    }
    for (let i = 0; i < arr.length; i++) {
        str =i+1 + ". " + arr[i][0] + " " + arr[i][1] + ":"
        obj = {
            firstname: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
        }
        if(arr[i][3] != null && arr[i][3] < 2020){
            obj.age = 2020 - arr[i][3]
        }else{
            obj.age = "Invalid Birth Year"
        }
        console.log(str)
        console.log(obj)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""











// var obj = {}
    // if(arr.length == 0){
    //     console.log('""')
    // }
    // for (var i = 0; i < arr.length; i++) {
    //     console.log(i + 1 + ". " + arr[i][0] + " " + arr[i][1] + ":")
    //     obj = {
    //         firstName : arr[i][0],
    //         lastName : arr[i][1],
    //         gender : arr[i][2],
    //     }
    //     if (arr[i][3] == null) {
    //         obj.age = "Invalid Birth Year"
    //     } else {
    //         obj.age = 2020 - arr[i][3]
    //     }
    // console.log(obj)
    // }