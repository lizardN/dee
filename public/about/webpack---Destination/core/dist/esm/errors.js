import {
    CustomError
} from "ts-custom-error";
export class IntegrationError extends CustomError {
    constructor(r, o, t) {
        super(r), this.status = t, this.code = o
    }
}
export class RetryableError extends CustomError {
    constructor(r = "", o = 500) {
        super(r), this.code = ErrorCodes.RETRYABLE_ERROR, this.status = o
    }
}
export class InvalidAuthenticationError extends CustomError {
    constructor(r = "", o = ErrorCodes.INVALID_AUTHENTICATION) {
        super(r), this.status = 401, this.code = o
    }
}
export class PayloadValidationError extends IntegrationError {
    constructor(r) {
        super(r, ErrorCodes.PAYLOAD_VALIDATION_FAILED, 400)
    }
}
export class APIError extends IntegrationError {
    constructor(r, o) {
        super(r, o.toString(), o)
    }
}
export class SelfTimeoutError extends IntegrationError {
    constructor(r) {
        super(r, ErrorCodes.SELF_TIMEOUT, 408)
    }
}
export var ErrorCodes;
! function(r) {
    r.INVALID_AUTHENTICATION = "INVALID_AUTHENTICATION", r.PAYLOAD_VALIDATION_FAILED = "PAYLOAD_VALIDATION_FAILED", r.INVALID_CURRENCY_CODE = "INVALID_CURRENCY_CODE", r.RETRYABLE_ERROR = "RETRYABLE_ERROR", r.REFRESH_TOKEN_EXPIRED = "REFRESH_TOKEN_EXPIRED", r.OAUTH_REFRESH_FAILED = "OAUTH_REFRESH_FAILED", r.SELF_TIMEOUT = "SELF_TIMEOUT"
}(ErrorCodes || (ErrorCodes = {}));