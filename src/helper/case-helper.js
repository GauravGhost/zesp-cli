// Supported format [booking.status, booking-status]
const toCamelCase = (str) => {
    return str.replace(/[-.]([a-z])/g, (g) => g[1].toUpperCase());
};

const toPascalCase = (str) => {
    str = toCamelCase(str)
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
};


module.exports = {
    toCamelCase,
    toPascalCase
}