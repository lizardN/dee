/**
 * Event Emitter that takes the expected contract as a generic
 * @example
 * ```ts
 *  type Contract = {
 *    delivery_success: [DeliverySuccessResponse, Metrics],
 *    delivery_failure: [DeliveryError]
 * }
 *  new Emitter<Contract>()
 *  .on('delivery_success', (res, metrics) => ...)
 *  .on('delivery_failure', (err) => ...)
 * ```
 */
var Emitter = /** @class */ (function() {
    function Emitter(options) {
        var _a;
        this.callbacks = {};
        this.warned = false;
        this.maxListeners = (_a = options === null || options === void 0 ? void 0 : options.maxListeners) !== null && _a !== void 0 ? _a : 10;
    }
    Emitter.prototype.warnIfPossibleMemoryLeak = function(event) {
        if (this.warned) {
            return;
        }
        if (this.maxListeners &&
            this.callbacks[event].length > this.maxListeners) {
            console.warn("Event Emitter: Possible memory leak detected; ".concat(String(event), " has exceeded ").concat(this.maxListeners, " listeners."));
            this.warned = true;
        }
    };
    Emitter.prototype.on = function(event, callback) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [callback];
        } else {
            this.callbacks[event].push(callback);
            this.warnIfPossibleMemoryLeak(event);
        }
        return this;
    };
    Emitter.prototype.once = function(event, callback) {
        var _this = this;
        var on = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(event, on);
            callback.apply(_this, args);
        };
        this.on(event, on);
        return this;
    };
    Emitter.prototype.off = function(event, callback) {
        var _a;
        var fns = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        var without = fns.filter(function(fn) {
            return fn !== callback;
        });
        this.callbacks[event] = without;
        return this;
    };
    Emitter.prototype.emit = function(event) {
        var _this = this;
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var callbacks = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        callbacks.forEach(function(callback) {
            callback.apply(_this, args);
        });
        return this;
    };
    return Emitter;
}());
export {
    Emitter
};
//# sourceMappingURL=emitter.js.map