export declare const getConfig: () => {
    node_env: any;
    allowedOrigins: any;
    databaseURI: any;
    port: any;
    stripe_token: any;
    redis_host: any;
    redis_port: any;
    redis_password: any;
    jwt_secret: any;
    jwt_expires: any;
    external_auth_token: any;
    csipp_base_url: any;
    csipp_client_secret: any;
    csipp_grant_type: any;
    csipp_origin: any;
    csipp_user_agent: any;
};
export declare const getAuthSecret: () => {
    atSecret: string;
    atSecretExpires: string;
    rtSecret: string;
    rtSecretExpires: string;
};
