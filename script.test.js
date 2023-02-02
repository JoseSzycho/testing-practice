const capitalize = require("./capitalize.js")
const reverseString = require("./reverseString.js")
const Calculator = require("./Calculator.js")
const caesarCipher = require("./caesarCipher.js")

test("first letter to be capital", () => {
    expect(capitalize("test string")).toBe("Test string");
})

test("reverse string", () => {
    expect(reverseString("hola como")).toBe("omoc aloh");
})

describe("calculator", () => {

    test("sum", () => {
        expect(Calculator.sum(5, 4)).toBe(9);
    })

    test("subtract", () => {
        expect(Calculator.sub(9, 4)).toBe(5);
    })

    test("divide", () => {
        expect(Calculator.div(15, 3)).toBe(5);
    })

    test("multiply", () => {
        expect(Calculator.mult(5, 3)).toBe(15);
    })
})

describe("caesarCipher", () => {

    test("shift two ascii positions", () => {
        expect(caesarCipher("ABCD", 1)).toBe("BCDE");
    })

    test("test ascii value more than 255", () => {
        expect(caesarCipher("ýþÿ", 3)).toBe(` !"`);
    })

    test("test for some ascii value more than 255", () => {
        expect(caesarCipher("ABýþÿA", 3)).toBe(`DE !"D`);
    })
})