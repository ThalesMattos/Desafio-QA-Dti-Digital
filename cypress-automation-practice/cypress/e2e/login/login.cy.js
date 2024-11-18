class LoginForm{
    elements = {
        emailAdressInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#passwd'),
        submitButton: () => cy.get('#SubmitLogin'),
        authFeedback: () => cy.get('.alert.alert-danger ol li')
    }

    typeEmailAdress(text){
        if(!text) return;
        this.elements.emailAdressInput().type(text)
    }

    typePassword(text){
        if(!text) return;
        this.elements.passwordInput().type(text)
    }
    clickSignIn(){
        this.elements.submitButton().click()
    }
}
const loginForm = new LoginForm()
describe('login no sistema', () => {
    describe('Login falho com senha inválida', () => {
        after(() => {
            cy.clearAllLocalStorage()
        });
        const input = {
            emailAdress: 'email@valido.com',
            password: 'senhaInvaida'
        }
        it('Dado que o usuário está na página de sign in', () => {
            cy.visit('/')
        });
        it(`Quando o usuário insere um e-mail válido "${input.emailAdress}" no campo "Email adress" em "Already registered?"`, () => {
            loginForm.typeEmailAdress(input.emailAdress)
        })
        it(`E insere uma senha inválida "${input.password}"`, () => {
            loginForm.typePassword(input.password)
        })
        it(`E clica no botão "Sign in"`, () => {
            loginForm.clickSignIn()
        })
        it(`Então vê a mensagem "Authentication failed."`, () => {
            loginForm.elements.authFeedback().should('contains.text', 'Authentication failed.')
        })
        it(`E permanece na página de sign in`, () => {
            cy.url().should('include', '/index.php?controller=authentication');

            loginForm.elements.emailAdressInput().should('be.visible');
        })
    });
});