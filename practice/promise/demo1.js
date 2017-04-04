// function want() {
//     console.log("这是想要执行的代码")
// };

// function fn(want) {
//     console.log("这里表示执行了一大堆各种代码")

//     // 返回Promise对象
//     return new Promise(function(resolve, reject) {
//         if (typeof want == "function") {
//             resolve(want)
//         } else {
//             reject('TypeError: ' + want + '不是一个函数')
//         }
//     })
// }

// fn(want).then(function(want) {
//     want();
// })

// fn('1234').catch(function(err) {
//     console.log(err)
// })


function fn(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == "number") {
            resolve();
        } else {
            reject();
        }
    }).then(function() {
        console.log('参数是一个number值')
    }, function() {
        console.log('参数不是一个number值')
    })
}

fn('1')