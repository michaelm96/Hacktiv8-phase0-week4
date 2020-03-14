function graduates(students) {
    var obj = {}
    for (let i = 0; i < students.length; i++) {
        if (obj[students[i].class] == null) {
            obj[students[i].class] = []
        }
        if (obj[students[i].class] != null) {
                if (students[i].score > 75) {
                    obj[students[i].class].push({
                        name: students[i].name,
                        score: students[i].score
                    })
                }
        }
    }
    return obj
}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}



   // var newObj = {}
    // var foxTemp = []
    // var wolfTemp = []
    // var tigersTemp = []
    // if (students.length == 0) {
    //     return {}
    // }
    // for (var i = 0; i < students.length; i++) {
    //     if (students[i].class == "foxes" && students[i].score >= 75) {
    //         foxTemp.push({
    //             name: students[i].name,
    //             score: students[i].score
    //         });
    //     } else if (students[i].class == "wolves" && students[i].score >= 75) {
    //         wolfTemp.push({
    //             name: students[i].name,
    //             score: students[i].score
    //         });
    //     } else if (students[i].class == "tigers" && students[i].score > 75) {
    //         tigersTemp.push({
    //             name: students[i].name,
    //             score: students[i].score
    //         });
    //     }
    // }
    // // for (var i = 0; i < foxTemp.length; i++) {
    // //     for (var j = 0; j < foxTemp.length - 1; j++) {
    // //         if (foxTemp[j].score < foxTemp[j + 1].score) {
    // //             var temp1 = foxTemp[j]
    // //             foxTemp[j] = foxTemp[j + 1]
    // //             foxTemp[j + 1] = temp1
    // //         }
    // //     }
    // // }
    // // for (var k = 0; k < wolfTemp.length; k++) {
    // //     for (var l = 0; l < wolfTemp.length - 1; l++) {
    // //         if (wolfTemp[l].score < wolfTemp[l + 1].score) {
    // //             var temp2 = wolfTemp[l]
    // //             wolfTemp[l] = wolfTemp[l + 1]
    // //             wolfTemp[l + 1] = temp2
    // //         }
    // //     }
    // // }
    // // for (var m = 0; m < tigersTemp.length; m++) {
    // //     for (var n = 0; n < tigersTemp.length - 1; n++) {
    // //         if (tigersTemp[n].score < tigersTemp[n + 1].score) {
    // //             var temp3 = tigersTemp[n]
    // //             tigersTemp[n] = tigersTemp[n + 1]
    // //             tigersTemp[n + 1] = temp3
    // //         }
    // //     }
    // // }
    // // var tempObj = {}
    // // if (foxTemp.length > 0) {
    // //     tempObj.name = foxTemp.name
    // //     tempObj.score = foxTemp.score
    // //     newObj.foxes = tempObj
    // //     tempObj = {}
    // // }
    // // if (wolfTemp.length > 0) {
    // //     tempObj.name = wolfTemp.name
    // //     tempObj.score = wolfTemp.score
    // //     newObj.wolfes = tempObj
    // //     tempObj = {}
    // // }
    // // if (tigersTemp.length > 0) {
    // //     tempObj.name = tigersTemp.name
    // //     tempObj.score = tigersTemp.score
    // //     newObj.tigers = tempObj
    // //     tempObj ={}
    // // }
    // if(foxTemp.length > 0){
    //     newObj.foxes = foxTemp
    // }
    // if(wolfTemp.length > 0){
    //     newObj.wolves =wolfTemp
    // }
    // if(tigersTemp.length > 0){
    //     newObj.tigers = tigersTemp
    // }
    // return newObj