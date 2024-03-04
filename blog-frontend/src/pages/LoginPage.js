/*
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
        <AuthForm/>
    </AuthTemplate>
  )
};

export default LoginPage;
*/

import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
        <AuthForm type="login"/>
    </AuthTemplate>
  )
};

export default LoginPage;