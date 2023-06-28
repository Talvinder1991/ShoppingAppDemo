/**
 * @providesModule Constants
 */

const Constants = {
    NETWORK_CHECK: false,
    LOADER: false,
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    POST_WITH_FORM: "POST_WITH_FORM",
    ACCESS_TOKEN: '',
    DEVICE_TOKEN: '',
    APP_VERSION: '',

    HTTPMethod: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PATCH: 'PATCH',
        DELETE: 'DELETE',
    },

    HTTPStatusCode: {
        success: 200,
        created: 201,
        redirectionError: 301,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        notFound: 404,
        internalServerError: 500,
        methodNotImplemented: 501,
        gatewayTimeOut: 503,
    },
};
export default Constants;
