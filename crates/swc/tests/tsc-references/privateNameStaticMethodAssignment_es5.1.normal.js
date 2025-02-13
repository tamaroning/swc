function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) {
            descriptor.__destrObj = {
                set value (v){
                    descriptor.set.call(receiver, v);
                }
            };
        }
        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return _classApplyDescriptorDestructureSet(receiver, descriptor);
}
function _classStaticPrivateMethodGet(receiver, classConstructor, method1) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    return method1;
}
function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
}
var A3 = function A3(a, b) {
    "use strict";
    _classCallCheck(this, A3);
    var _this_method;
    _classStaticPrivateFieldSpecSet(A3, A3, _method, function() {} // Error, not writable 
    );
    _classStaticPrivateFieldSpecSet(a, A3, _method, function() {}); // Error, not writable 
    _classStaticPrivateFieldSpecSet(b, A3, _method, function() {} //Error, not writable 
    );
    var ref;
    ref = {
        x: function() {}
    }, _classStaticPrivateFieldDestructureSet(A3, _method).value = ref.x, ref; //Error, not writable 
    var x = _classStaticPrivateMethodGet(A3, A3, method);
    _classStaticPrivateFieldSpecSet(b, A3, _method, (_this_method = +_classStaticPrivateMethodGet(b, A3, method)) + 1), _this_method; //Error, not writable 
};
function method() {}
