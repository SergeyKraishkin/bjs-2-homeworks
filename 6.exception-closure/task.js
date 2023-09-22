function parseCount(value) {
    let temp = Number.parseFloat(value);
    if (isNaN(value))
        throw new Error("Невалидное значение");
    else
        return temp;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(one, two, third) {
        if (((one + two) < third) || ((one + third) < two) || ((two + third) < one)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.one = one;
        this.two = two;
        this.third = third;

    }
    get perimeter() {
        return Number(this.one + this.two + this.third);
    }
    get area() {
        let p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.one) * (p - this.two) * (p - this.third)).toFixed(3));
    }
}

function getTriangle(one, two, third) {
    try {
        return new Triangle(one, two, third);
    } catch (a) {
        return {
            get area() { return "Ошибка! Треугольник не существует" },
            get perimeter() { return "Ошибка! Треугольник не существует" }
        }
    }
}