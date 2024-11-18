Funcionalidade: login no sistema

Cenário: Login falho com senha inválida
    Dado que o usuário está na página de sign in
    Quando o usuário insere um e-mail válido "email@valido.com" no campo "Email address" em "Already registered?"
    E usuário insere uma senha inválida "senhaInvaida"
    E clica no botão "Sign in"
    Então vê a mensagem "Authentication failed."
    E permanece na página de sign in

Funcionalidade: Criar uma conta

Cenário: Criar conta utilizando um email de uma conta ativa
    Dado que o usuário está na página de sign in
    Quando o usuário insere um email já cadastrado "emailativo@exemplo.com" no campo "Email address" em "Create an account"
    E clica no botão "Create an account"
    Então vê a mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one. "
    E permanece na página de sign in

Funcionalidade: Esqueceu a senha ?

Cenário: Recuperar senha com email não cadastrado
    Dado que o usuário está na página de Forgot your password?
    Quando o usuário insere um email não cadastrado "emailnaocadastrado@exemplo.com"
    E clica no botão "Retrieve Password"
    Então uma mensagem de erro é exibida "This email address is not registered."
    E permanece na página de recuperação de senha