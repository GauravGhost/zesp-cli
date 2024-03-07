class Store {
    constructor() {
        this.data = {};
    }

    setValue(key, value) {
        this.data[key] = value;
    }

    getValue(key) {
        return this.data[key];
    }
}

module.exports = new Store();
