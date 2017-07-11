/**
 * Created by HUANGYE2 on 7/11/2017.
 */

/**
 * Code to check if src is an object
 * @param src
 * @returns {boolean}
 */
function checkIsObject(src) {
    return (!!src && typeof src === 'object');
}

/**
 * Shallow copy an object
 * @param src
 * @returns {*}
 */
function shallowCopy(src) {
    if (!checkIsObject(src)) {  //If not an object, just return the copied argument.
        return src;
    }
    else {
        var dest;
        if (src.constructor === Array) { // If is an array
            dest = src.slice();
        }
        else if (src.constructor === Date) { // If is Date
            dest = new Date(src.getTime());
        }
        else {  // Other object
            dest = {};
            for (var i in src) {
                dest[i] = src[i];
            }
        }
        return dest;
    }
}

/**
 * Deep copy an object
 * @param src
 * @returns {*}
 */
function deepCopy(src) {
    if (!checkIsObject(src)) {  //If not an object, just return the copied argument.
        return src;
    }
    else {
        var dest;
        if (src.constructor === Array) { // If is an array
            dest = [];
            for(var idx = 0;idx < src.length; idx++) {
                dest.push(deepCopy(src[idx]));
            }
        }
        else if (src.constructor === Date) { // If is Date
            dest = new Date(src.getTime());
        }
        else {  // Other object
            dest = {};
            for (var i in src) {
                dest[i] = deepCopy(src[i]);
            }
        }
        return dest;
    }
}

function test() {
    var num = 10;
    var str = "Tom";
    var arrNum = [1, 2, 3, 4, 5];
    var arrObj = [{
        name: "Tom"
    }, {
        name: "Billy"
    }];
    var obj = {name: "Tom", age: 100, addr: {city: "Zhuhai", country: "China"}};
    var date = new Date();

    // Shallow copy
    var nullCopy = shallowCopy(null);
    var numCopy = shallowCopy(num);
    var strCopy = shallowCopy(str);
    var arrNumCopy = shallowCopy(arrNum);
    var arrObjCopy = shallowCopy(arrObj);
    var objCopy = shallowCopy(obj);
    var dateCopy = shallowCopy(date);

    // Deep copy
    var nullCopy_ = deepCopy(null);
    var numCopy_ = deepCopy(num);
    var strCopy_ = deepCopy(str);
    var arrNumCopy_ = deepCopy(arrNum);
    var arrObjCopy_ = deepCopy(arrObj);
    var objCopy_ = deepCopy(obj);
    var dateCopy_ = deepCopy(date);

    // Try to modify the original ones
    arrObjCopy[0].name = "Sam"; // change the original value!
    obj.addr.city = "GZ";   // change the original value!

    console.log('-----Shallow Copy-----');
    console.log('nullCopy: ', nullCopy);
    console.log('numCopy: ', numCopy);
    console.log('strCopy: ', strCopy);
    console.log('arrNumCopy: ', arrNumCopy);
    console.log('arrObjCopy: ', arrObjCopy);
    console.log('objCopy: ', objCopy);
    console.log('dateCopy: ', dateCopy);

    console.log('-----Deep Copy-----');
    console.log('nullCopy: ', nullCopy_);
    console.log('numCopy: ', numCopy_);
    console.log('strCopy: ', strCopy_);
    console.log('arrNumCopy: ', arrNumCopy_);
    console.log('arrObjCopy: ', arrObjCopy_);
    console.log('objCopy: ', objCopy_);
    console.log('dateCopy: ', dateCopy_);

}

test();




