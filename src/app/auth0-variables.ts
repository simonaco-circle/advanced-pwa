interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'jGj8pPxeEo6TO380GX4it2wuHDUX2d8W',
  domain: 'metavu.auth0.com',
  callbackURL: 'http://localhost:4200/home'
};
