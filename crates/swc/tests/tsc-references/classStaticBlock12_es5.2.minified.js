var C = function() {
    "use strict";
    !function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }(this, C);
}, _x = {
    writable: !0,
    value: 1
};
!function() {
    var receiver, classConstructor, descriptor, receiver, descriptor;
    receiver = C, classConstructor = C, descriptor = _x, (function(receiver, classConstructor) {
        if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    })(receiver, classConstructor), (function(descriptor, action) {
        if (void 0 === descriptor) throw new TypeError("attempted to get private static field before its declaration");
    })(descriptor, "get"), descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}();
