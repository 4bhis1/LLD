class Cell {

    #setType(value) {
        if (!value) {
            this.type = void 0
        } else if (typeof value === "number") {
            this.type = "number";
        } else {
            if (value.startsWith("=")) {
                this.type = "formula";
            } else {
                this.type = "string";
            }
        }
    }

    constructor(value) {
        this.value = value;
        this.#setType(value)
    }

    get getValue() {
        return this.value;
    }

    editValue(value) {
        this.value = value
        this.#setType(value)
    }
}

module.exports = Cell