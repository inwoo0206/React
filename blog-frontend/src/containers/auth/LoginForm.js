import { useEffect } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
    const dispatch = UseDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const {value,name} = e.target;
        dispatch(
            changeField({
                form:'login',
                key: name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        // 구현 예정
    }
}