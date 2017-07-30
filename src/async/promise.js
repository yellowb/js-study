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


