"use strict";

export function addition(...numbers) {
    let sum = 0;
    numbers.forEach(function (value) {
        sum+=value;
    });
    return sum;
};

export function multiplication(...numbers) {
    let mul = 1;
    numbers.forEach(function (value) {
        mul*=value;
    });
    return mul;
};