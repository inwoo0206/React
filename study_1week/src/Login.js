import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const { id, password } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    setForm({
      id: "",
      password: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const [state, setState] = useState(false);

  const isLoggedIn = () => {
    if (id === "rnjsdlsdn" && password === "1234") {
      setState(true);
    } else {
      alert("정보가 잘못되었습니다.");
    }
  };

  const isLoggedOut = () => {
    setState(false);
    setForm({
      id: "",
      password: "",
    });
  };

  return (
    <div>
      {state ? (
        <div>
          <h1>Welcome, {id}!</h1>
          <button onClick={isLoggedOut}>로그아웃</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <hr />
          <input
            type="text"
            name="id"
            placeholder="input id"
            value={id}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="input password"
            value={password}
            onChange={onChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                isLoggedIn();
              }
            }}
          />
          <button onClick={isLoggedIn}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default Login;
