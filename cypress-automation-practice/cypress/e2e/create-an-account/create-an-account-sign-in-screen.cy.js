class LoginForm{
    elements = {
        emailAddressInput: () => cy.get('#email_create'),
        submitButton: () => cy.get('#SubmitCreate'),
        authFeedback: () => cy.get('#create_account_error')
    }

    typeEmailAddress(text){
        if(!text) return;
        this.elements.emailAddressInput().type(text)
    }
    clickSignIn(){
        this.elements.submitButton().click()
    }
}
const loginForm = new LoginForm()
describe('Criar uma conta', () => {
    describe('Criar conta utilizando um email de uma conta ativa', () => {
        after(() => {
            cy.clearAllLocalStorage()
        });
        const input = {
            emailAddress: 'email@valido.com',
        }
        it('Dado que o usuário está na página de sign in', () => {
            cy.visit('/')
        });
        it(`Quando o usuário insere um email já cadastrado "${input.emailAddress}" no campo "Email address" em "Create an account"`, () => {
            loginForm.typeEmailAddress(input.emailAddress)
        })
        it(`E clica no botão "Create an account"`, () => {
            loginForm.clickSignIn()
        })
        it(`Então vê a mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one. "`, () => {
            loginForm.elements.authFeedback().should('contains.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one.')
        })
        it(`E permanece na página de sign in`, () => {
            cy.url().should('include', '/index.php?controller=authentication');

            loginForm.elements.emailAddressInput().should('be.visible');
        })
    });
});