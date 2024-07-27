"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.houseStarkCollection = void 0;
exports.houseStark = houseStark;
exports.createCounter = createCounter;
exports.uniqueIdGenerator = uniqueIdGenerator;
exports.greetHouseMember = greetHouseMember;
exports.createLoggers = createLoggers;
exports.memoize = memoize;
function houseStark() {
    var winterfell = "Winter is Coming";
    return function () {
        return winterfell;
    };
}
var messageFromStark = houseStark();
console.log(messageFromStark());
function createCounter() {
    var count = 0;
    return {
        increment: function () {
            count++;
        },
        getCurrentCount: function () {
            return count;
        },
    };
}
var counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCurrentCount());
function uniqueIdGenerator() {
    var lastId = 0;
    return function () {
        lastId++;
        return "GOT-".concat(lastId);
    };
}
var generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());
function greetHouseMember(name) {
    return function () {
        return "Hello, ".concat(name, " of House Stark!");
    };
}
var greetNed = greetHouseMember("Ned");
console.log(greetNed());
function createLoggers() {
    var loggers = [];
    for (var i = 0; i < 5; i++) {
        loggers.push((function (index) {
            return function () {
                console.log(index);
            };
        })(i));
    }
    return loggers;
}
var loggers = createLoggers();
loggers[0]();
loggers[1]();
loggers[2]();
exports.houseStarkCollection = (function () {
    var items = [];
    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            var index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function () {
            return items;
        },
    };
})();
exports.houseStarkCollection.addItem("Ned Stark");
exports.houseStarkCollection.addItem("Jon Snow");
console.log(exports.houseStarkCollection.listItems());
exports.houseStarkCollection.removeItem("Ned Stark");
console.log(exports.houseStarkCollection.listItems());
function memoize(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        else {
            var result = fn.apply(void 0, args);
            cache[key] = result;
            return result;
        }
    };
}
exports.factorial = memoize(function (n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * (0, exports.factorial)(n - 1);
    }
});
console.log((0, exports.factorial)(10));
console.log((0, exports.factorial)(8));
