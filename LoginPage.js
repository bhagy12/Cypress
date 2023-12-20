class LoginPage
{
    txtbx_username = '#formemail'
    txtbx_password = '#formpassword'
    btn_Login = 'button[type="submit"]'

    enterUserName(username) {
        cy.get(this.txtbx_username).type(username)
    }

    enterPassword(password) {
        cy.get(this.txtbx_password).type(password)
    }

    clickLogin() {
        cy.get(this.btn_Login).click()
    }


}

export default LoginPage;