/*
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    )
};

export default RegisterPage;
*/

/*
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register"/>
        </AuthTemplate>
    )
};

export default RegisterPage;
*/

import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm/>
        </AuthTemplate>
    )
};

export default RegisterPage;