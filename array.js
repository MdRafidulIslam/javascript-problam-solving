// var number = [23, 12, 45, 56, 44, 76]
// console.log(number)
// console.log(number.length)
// console.log(number[3])
// number[3] = 100
// console.log(number.indexOf(76))
// console.log(number)


// var friendsName = ['Abul', 'Babul', 'Marfin', 'Rofiq']
// console.log(friendsName)
// friendsName.push('Shakib')
// console.log(friendsName)
// friendsName.pop()
// friendsName.pop()
// console.log(friendsName)

// var friendsAge = [12, 11, 22, 43, 32, 90]
// var friendsName = [11, 22, 33, 44, 55]

// var newAge = friendsAge.concat(friendsName)
// console.log(newAge)


// var friendsAge = [12, 11, 22, 43, 32, 90]
// var sliceAge = friendsAge.slice(2, 5)
// console.log(sliceAge)


// var friendsAge = [12, 11, 22, 43, 32, 90, 8]
// var sliceAge = friendsAge.splice(2, 5)
// console.log(sliceAge)
// console.log(friendsAge)


// var friendsAge = [12, 11, 22, 43, 32, 90]
// var sliceAge = friendsAge.slice(2, 5)
// console.log(sliceAge)
// console.log(friendsAge)

// var friendName = ['abul', 'babul', 'cabul', 'ribul', 'kabul', 'babul', 'cabul']

// function removeDuplicateItem(name) {
//     var uniqueName = []
//     for (var i = 0; i < name.length; i++) {
//         // console.log(name[i])
//         if (uniqueName.includes(name[i]) === false) {
//             uniqueName.push(name[i])
//         }
//     }
//     return uniqueName

// }

// console.log(removeDuplicateItem(friendName))


// var friendName = ['abul', 'babul', 'nabbal', 'cabul', 'ribul', 'kabul', 'babul', 'cabul']

// function removeDuplicateItem(name) {
//     var uniqueName = []
//     for (var i = 0; i < name.length; i++) {
//         // console.log(name[i])
//         if (uniqueName.indexOf(name[i]) === -1) {
//             uniqueName.push(name[i])
//         }
//     }
//     return uniqueName

// }

// console.log(removeDuplicateItem(friendName))


// for (var i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('foo bar')
//     }
//     else if (i % 3 === 0) {
//         console.log("foo")

//     }
//     else if (i % 5 === 0) {
//         console.log('bar')
//     }
//     else {
//         console.log(i)
//     }
// }