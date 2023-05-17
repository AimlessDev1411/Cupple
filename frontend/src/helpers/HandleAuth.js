export default class HandleAuth {

  constructor() {
    this.cupple = {};
  }

  redirectAuthentication() {
    const token = this.getToken();
    if (token === null) return { name: 'Login' };
    if (token !== null) return { name: 'App' };
  }

  isAuthenticated(to, from, next) {
    const token = this.getToken();
    if (token === null) {
      next({ name: 'Login' });
      return;
    }
    next();
  }


  setCredentials(credentials = {}, strategy = '') {
    if (strategy === 'SESSION') return this.setCredentialsSessionStorage(credentials);

    if (strategy === 'LOCAL') return this.setCredentialsLocalStorage(credentials);

    throw 'Invalid strategy';
  }


  /**
   * Get the token depending on the strategy
   */
  getToken() {
    try {
      const emulateToken = sessionStorage.emulateOrganization;

      if (emulateToken) {
        const tokenEmulate = JSON.parse(sessionStorage.emulateOrganization);

        if (!tokenEmulate.strategy) throw 'Undefined authentication strategy';

        if (tokenEmulate.strategy === 'LOCAL') {
          return JSON.parse(localStorage.emulateOrganization).token;
        }

        if (tokenEmulate.strategy === 'SESSION')
          return JSON.parse(sessionStorage.emulateOrganization).token;
      }

      if (!emulateToken) {
        const enpesos = JSON.parse(localStorage.enpesos);

        if (!enpesos.strategy) throw 'Undefined authentication strategy';

        if (enpesos.strategy === 'LOCAL') {
          return JSON.parse(localStorage.enpesos).token;
        }

        if (enpesos.strategy === 'SESSION')
          return JSON.parse(sessionStorage.enpesos).token;
      }
    } catch (error) {
      return null;
    }
  }


  /**
   * Logout depending on the strategy
   */
  logout() {
    try {
      const enpesos = JSON.parse(localStorage.enpesos);
      const origin = location.origin;
      const url = `${origin}/auth/login`;

      if (!enpesos.strategy) throw 'Undefined authentication strategy';

      if (enpesos.strategy === 'LOCAL') localStorage.clear();

      if (enpesos.strategy === 'SESSION') sessionStorage.clear();

      // ctx.$router.push({ name: 'Login' })
      location.replace(url);
    } catch (error) {
      return null;
    }
  }

  /**
   * Save credentials in session storage
   * @param {*} credentials - user credentials
   */
  setCredentialsSessionStorage(credentials = {}) {
    this.cupple.strategy = 'SESSION';
    this.cupple.token = credentials.token;
    this.cupple.user = credentials.user;
    this.cupple.organization = credentials.organization;

    localStorage.setItem('enpesos', JSON.stringify(this.cupple));
  };

  /**
   * Save credentials in local storage
   * @param {*} credentials - user credentials
   */
  setCredentialsLocalStorage(credentials = {}) {
    this.cupple.strategy = 'LOCAL';
    this.cupple.token = credentials.token;
    this.cupple.user = credentials.user;
    this.cupple.organization = credentials.organization;

    localStorage.setItem('enpesos', JSON.stringify(this.cupple));
  };

}
