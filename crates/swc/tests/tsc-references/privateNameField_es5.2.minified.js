var _name = new WeakMap(), A = function(name) {
    "use strict";
    var obj, privateMap, value, receiver, privateMap, value, descriptor;
    !function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }(this, A), obj = this, value = {
        writable: !0,
        value: void 0
    }, (function(obj, privateCollection) {
        if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    })(obj, privateMap = _name), privateMap.set(obj, value), receiver = this, privateMap = _name, value = name, descriptor = (function(receiver, privateMap, action) {
        if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
        return privateMap.get(receiver);
    })(receiver, privateMap, "set"), (function(receiver, descriptor, value) {
        if (descriptor.set) descriptor.set.call(receiver, value);
        else {
            if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
            descriptor.value = value;
        }
    })(receiver, descriptor, value);
};
