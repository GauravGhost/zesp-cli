// Supported format [booking.status, booking-status]
const toCamelCase = (str) => {
    return str.replace(/[-.]([a-z])/g, (g) => g[1].toUpperCase());
};

module.exports = {
    toCamelCase
}