var Symbol;
(new class {
    [Symbol.iterator]() {}
})[Symbol.iterator](0) // Should error
;
