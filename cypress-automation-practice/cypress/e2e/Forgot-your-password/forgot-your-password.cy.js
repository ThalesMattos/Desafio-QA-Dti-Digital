class LoginForm{
    elements = {
        emailAdressInput: () => cy.get('#email'),
        submitButton: () => cy.contains('button', 'Retrieve Password'),
        authFeedback: () => cy.get('.alert.alert-danger ol li')
    }

    typeEmailAdress(text){
        if(!text) return;
        this.elements.emailAdressInput().type(text)
    }
    clickSignIn(){
        this.elements.submitButton().click()
    }
}
const loginForm = new LoginForm()
describe('Esqueceu a senha ?', () => {
    describe('Recuperar senha com email não cadastrado', () => {
        after(() => {
            cy.clearAllLocalStorage()
        });
        const input = {
            emailAdress: 'emailnaocadastrado@exemplo.com',
        }
        it('Dado que o usuário está na página de Forgot your password?', () => {
            cy.visit('http://www.automationpractice.pl/index.php?controller=password')
        });
        it(`Quando o usuário insere um email não cadastrado "${input.emailAdress}"`, () => {
            loginForm.typeEmailAdress(input.emailAdress)
        })
        it(`E clica no botão "Retrieve Password"`, () => {
            loginForm.clickSignIn()
        })
        it(`Então uma mensagem de erro é exibida "There is no account registered for this email address."`, () => {
            loginForm.elements.authFeedback().should('contains.text', 'There is no account registered for this email address.')
        })
        it(`E permanece na página de recuperação de senha`, () => {
            cy.url().should('include', '/index.php?controller=password');

            loginForm.elements.emailAdressInput().should('be.visible');
        })
    });
});