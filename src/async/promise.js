//var Promise = require('appoint')
//var promise = new Promise((resolve) => {
//    //setTimeout(() => {
//        console.log('haha');
//        resolve('haha');
//    //}, 1000)
//})
//var a = promise.then(function onSuccess(val) {
//    console.log("A1: " + val);
//    //console.dir(promise, { depth: 10 });
//});
//var a2 = promise.then(function onSuccess(val) {
//    console.log("A2: " + val);
//    //console.dir(promise, { depth: 10 });
//});
////var b = promise.catch(function onError() {
////});
//console.dir(promise, { depth: 10 })
////console.log(promise.queue[0].promise === a)
////console.log(promise.queue[1].callRejected === Promise.INTERNAL)

//var p1 = new Promise((resolve) => {
//    setTimeout(() => {
//        console.log('p1');
//        var obj = {};
//        Object.assign(obj, {'p1': 'p1'})
//        resolve(obj);
//    }, 1000);
//});

//var p2 = new Promise((resolve) => {
//    setTimeout(() => {
//        console.log('p2');
//        resolve(Object.assign(obj, {'p2': 'p2'}));
//    }, 1000);
//});

Promise.resolve({})
    .then(function (obj) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('p1');
                Object.assign(obj, {'p1': 'p1'});
                resolve(obj);
            }, 2000);
        });
    })
    .then(function (obj) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('p2');
                Object.assign(obj, {'p2': 'p2'});
                resolve(obj);
            }, 2000);
        });
    });


