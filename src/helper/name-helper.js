const layerName = (location) => {
    return location.split("/").pop();
}

module.exports = {
    layerName
}