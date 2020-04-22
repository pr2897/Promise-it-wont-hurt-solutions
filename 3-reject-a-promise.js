// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('REJECTED!'))
//     }, 300)
// }).then((response) => console.log(response)).catch((response) => console.log(response.message))


var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'))
    }, 300)
}).then((response) => console.log(response), (response) => console.log(response.message)).catch((response) => console.log(response.message))