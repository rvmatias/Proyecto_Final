

function LoginPage() {

    return (
        <div className="LoginPage">
            <h1 className="loginPage-title" >Log in to Twitter</h1>
            <form>
                <input type="text" name="username"></input>
                <input type="password" name="password" />
            </form>
        </div >
    );

};

export default LoginPage;
