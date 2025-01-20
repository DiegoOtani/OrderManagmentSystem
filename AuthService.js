class AuthService {
  constructor() {
    this.users = [
      { id: 1, username: 'user1', password: 'password1' },
      { id: 2, username: 'user2', password: 'password2' },
    ]
    this.sessions = {};
  }

  login(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    
    if(!user) {
      console.log("Auth service: Falha ao realizar login.");
      return null;
    }

    const token = `session-token-${Date.now()}`;
    this.sessions[token] = user;
    console.log(`Auth service: Usuário logado com sucesso. Token: ${token}`);
    return token;
  }
}

module.exports = AuthService;