function A(param1, param2) {
    console.log(param1);
    console.log(param2);
}
A.bind(window, 1, 2);
A.call(window, 1, 2);
A.apply(window, [1, 2]);


Function.prototype.bindNew = function () {
    debugger;
    var self = this;
    var params = arguments;
    var context = params[0];
    var args = Array.prototype.slice.call(params, 1);
    return function () {
        return self.apply(context, args);
    }
};

A.bindNew(window, 1, 2)();