import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import style from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loginValidator } from "../../utils/validators/loginValidator";

// LOGIN FORM
const LoginForm = ({ login }) => {

    // USE NAVIGATE
    const navigate = useNavigate();

    const onSubmit = () => function (values) {
        login(values.email, values.password, navigate);
    };
    return (
        <Form
            onSubmit={onSubmit()}
            validate={loginValidator}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={`flex_column ${style.form}`}>
                    <div className="flex_column">
                        <label>Email</label>
                        <Field
                            name="email"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="email"
                                    className={`input ${style.input_login}`}
                                />
                            )}
                        />
                        <div style={{ color: 'red' }}>
                            <Field name="email" subscription={{ touched: true, error: true }}>
                                {({ meta }) => (meta.touched && meta.error ? <span>{meta.error}</span> : null)}
                            </Field>
                        </div>
                    </div>
                    <div className="flex_column">
                        <label>Password</label>
                        <Field
                            name="password"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="password"
                                    className={`input ${style.input_login}`}
                                />
                            )}
                        />
                        <div style={{ color: 'red' }}>
                            <Field name="password" subscription={{ touched: true, error: true }}>
                                {({ meta }) => (meta.touched && meta.error ? <span>{meta.error}</span> : null)}
                            </Field>
                        </div>
                    </div>
                    <Button text="Sign In" />
                </form>
            )}
        />
    )
}

// LOGIN COMPONENT
const Login = ({ login, isLoginFailed }) => {

    // LAYOUT
    return (
        <div className={style.login}>
            <div className={style.loginForm}>
                <h2>Login</h2>
                <LoginForm login={login} />
                {isLoginFailed && (
                    <div style={{ color: 'red' }}>
                        <span>Wrong credentials</span>
                    </div>
                )}
                <NavLink to="/registration" className={style.login__link}>Create an account?</NavLink>
            </div>
        </div>
    );
};

// EXPORTING LOGIN COMPONENT
export default Login;