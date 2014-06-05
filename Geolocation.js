window.navigator["geolocation"] = Geolocation;

var Geolocation = {
    getCurrentPosition: function (successCallback, errorCallback, options) {},
    watchPosition: function (successCallback, errorCallback, options) {
        return watchId;
    },
    clearWatch: function (watchId) {}
};

var Position = function () {
    Object.defineProperty(this, "coords", {
        get: function () {
            return new Coordinates();
        }
    });
    Object.defineProperty(this, "timestamp", {
        get: function () {
            return new Date();
        }
    });
    return this;
};

var Coordinates = function () {
    Object.defineProperty("latitude", {
        get: function () {}
    });
    Object.defineProperty("longitude", {
        get: function () {}
    });
    Object.defineProperty("altitude", {
        get: function () {}
    });
    Object.defineProperty("accuracy", {
        get: function () {}
    });
    Object.defineProperty("altitudeAccuracy", {
        get: function () {}
    });
    Object.defineProperty("heading", {
        get: function () {}
    });
    Object.defineProperty(this, "speed", {
        get: function () {}
    });
    return this;
};

var PositionError = function () {
    Object.defineProperty(this, "code", {
        get: function () {}
    });
    Object.defineProperty(this, "message", {
        get: function () {
            return this._message;
        }
    });
    return this;
};

PositionError.PERMISSION_DENIED = 1;
PositionError.POSITION_UNAVAILABLE = 2;
PositionError.TIMEOUT = 3;
