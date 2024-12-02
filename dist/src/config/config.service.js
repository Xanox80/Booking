"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthSecret = exports.getConfig = void 0;
const utils_1 = require("utils");
const env = require("env-var");
const getConfig = () => {
    return {
        node_env: (0, utils_1.getSafeEnv)('NODE_ENV'),
        allowedOrigins: (0, utils_1.getSafeEnv)('ALLOWED_ORIGINS'),
        databaseURI: (0, utils_1.getSafeEnv)('DATABASE_URI'),
        port: (0, utils_1.getSafeEnv)('PORT'),
        stripe_token: (0, utils_1.getSafeEnv)('STRIPE_TOKEN'),
        redis_host: (0, utils_1.getSafeEnv)('REDIS_HOST'),
        redis_port: (0, utils_1.getSafeEnv)('REDIS_PORT'),
        redis_password: (0, utils_1.getSafeEnv)('REDIS_PASSWORD'),
        jwt_secret: (0, utils_1.getSafeEnv)('JWT_SECRET'),
        jwt_expires: (0, utils_1.getSafeEnv)('JWT_EXPIRES'),
        external_auth_token: (0, utils_1.getSafeEnv)('EXTERNAL_AUTH_TOKEN'),
        csipp_base_url: (0, utils_1.getSafeEnv)('CSIPP_BASE_URL'),
        csipp_client_secret: (0, utils_1.getSafeEnv)('CSIPP_CLIENT_SECRET'),
        csipp_grant_type: (0, utils_1.getSafeEnv)('CSIPP_GRANT_TYPE'),
        csipp_origin: (0, utils_1.getSafeEnv)('CSIPP_ORIGIN'),
        csipp_user_agent: (0, utils_1.getSafeEnv)('CSIPP_USER_AGENT'),
    };
};
exports.getConfig = getConfig;
const getAuthSecret = () => ({
    atSecret: env.get('AT_SECRET').required().asString(),
    atSecretExpires: env.get('AT_SECRET_EXPIRES').required().asString(),
    rtSecret: env.get('RT_SECRET').required().asString(),
    rtSecretExpires: env.get('RT_SECRET_EXPIRES').required().asString(),
});
exports.getAuthSecret = getAuthSecret;
//# sourceMappingURL=config.service.js.map