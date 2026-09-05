
const fs = require("fs");

const fileName = process.argv[2];

if (!fileName) {
    console.log("Please provide a JSON file.");
    process.exit(1);
}

const data = JSON.parse(
    fs.readFileSync(fileName, "utf8")
);

const k = data.keys.k;

function convertToDecimal(value, base) {
    let result = 0n;
    const b = BigInt(base);

    for (const ch of value.toLowerCase()) {
        let digit;

        if (ch >= "0" && ch <= "9") {
            digit = BigInt(ch.charCodeAt(0) - 48);
        } else {
            digit = BigInt(ch.charCodeAt(0) - 87);
        }

        result = result * b + digit;
    }

    return result;
}

function abs(x) {
    return x < 0n ? -x : x;
}

function gcd(a, b) {
    while (b !== 0n) {
        const temp = a % b;
        a = b;
        b = temp;
    }

    return a;
}

class Fraction {
    constructor(num, den = 1n) {
        if (den === 0n) {
            throw new Error("Denominator cannot be zero");
        }

        if (den < 0n) {
            num = -num;
            den = -den;
        }

        const g = gcd(abs(num), den);

        this.num = num / g;
        this.den = den / g;
    }

    add(other) {
        return new Fraction(
            this.num * other.den +
            other.num * this.den,
            this.den * other.den
        );
    }

    multiply(other) {
        return new Fraction(
            this.num * other.num,
            this.den * other.den
        );
    }

    toString() {
        if (this.den === 1n) {
            return this.num.toString();
        }

        return this.num + "/" + this.den;
    }
}

const points = [];

for (const key of Object.keys(data)) {
    if (key === "keys") {
        continue;
    }

    const x = BigInt(key);
    const base = Number(data[key].base);
    const value = data[key].value;

    const y = convertToDecimal(value, base);

    points.push({
        x: x,
        y: y
    });
}

points.sort((a, b) => {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
    return 0;
});

function findConstantTerm(points, k) {
    let result = new Fraction(0n);

    for (let i = 0; i < k; i++) {
        let term = new Fraction(points[i].y);

        for (let j = 0; j < k; j++) {
            if (i === j) {
                continue;
            }

            const xi = points[i].x;
            const xj = points[j].x;

            term = term.multiply(
                new Fraction(-xj, xi - xj)
            );
        }

        result = result.add(term);
    }

    return result;
}

const answer = findConstantTerm(points, k);

console.log(answer.toString());

