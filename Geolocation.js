window.navigator["geolocation"] = Geolocation;

var Geolocation = {
    lastPosition: null,
    getCurrentPosition: function (successCallback, errorCallback, options) {
        return setTimeout (function () {}, 0);
    },
    watchPosition: function (successCallback, errorCallback, options) {
        return watchId;
    },
    clearWatch: function (id) {}
};

var Position = function (coords, timestamp) {
    this.coords = coords || new Coordinates();
    this.timestamp = timestamp || new Date();
    return this;
};

var Coordinates = function (latitude, longitude, altitude, accuracy, heading, speed, altitudeAccuracy) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.accuracy = accuracy;
    this.altitude = altitude;
    this.heading = heading;
    this.speed = speed;
    this.altitudeAccuracy = altitudeAccuracy;
    return this;
};

var PositionError = function (code, message) {
    this.code = code;
    this.message = message;
    return this;
};

PositionError.PERMISSION_DENIED = 1;
PositionError.POSITION_UNAVAILABLE = 2;
PositionError.TIMEOUT = 3;
