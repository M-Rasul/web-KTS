import { useNavigate } from "react-router";
import style from "./Registration.module.css";
import { registrationValidator } from "../../utils/validators/registrationValidator";
import { Field, Form } from "react-final-form";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

// REGISTRATION FORM
const RegistrationForm = ({ register }) => {

    // USE NAVIGATE
    const navigate = useNavigate();

    const onSubmit = () => function (values) {
        register(values.nickname, values.email, values.password, values.image, values.age, values.description, navigate);
    };
    return (
        <Form
            onSubmit={onSubmit()}
            validate={registrationValidator}
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
                                    className={`input ${style.input_registration}`}
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
                        <label>Nickname</label>
                        <Field
                            name="nickname"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="text"
                                    className={`input ${style.input_registration}`}
                                />
                            )}
                        />
                        <div style={{ color: 'red' }}>
                            <Field name="nickname" subscription={{ touched: true, error: true }}>
                                {({ meta }) => (meta.touched && meta.error ? <span>{meta.error}</span> : null)}
                            </Field>
                        </div>
                    </div>
                    <div className="flex_column">
                        <label>Avatar Image</label>
                        <Field
                            name="image"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="file"
                                    className={`input ${style.input_registration}`}
                                />
                            )}
                        />
                    </div>
                    <div className="flex_column">
                        <label>Age</label>
                        <Field
                            name="age"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="number"
                                    className={`input ${style.input_registration}`}
                                />
                            )}
                        />
                        <div style={{ color: 'red' }}>
                            <Field name="age" subscription={{ touched: true, error: true }}>
                                {({ meta }) => (meta.touched && meta.error ? <span>{meta.error}</span> : null)}
                            </Field>
                        </div>
                    </div>
                    <div className="flex_column">
                        <label>Description</label>
                        <Field
                            name="description"
                            render={({ input }) => (
                                <textarea
                                    {...input}
                                    className={`input ${style.input_registration} ${style.input_large}`}
                                >
                                </textarea>
                            )}
                        />
                    </div>
                    <div className="flex_column">
                        <label>Password</label>
                        <Field
                            name="password"
                            render={({ input }) => (
                                <input
                                    {...input}
                                    type="password"
                                    className={`input ${style.input_registration}`}
                                />
                            )}
                        />
                        <div style={{ color: 'red' }}>
                            <Field name="password" subscription={{ touched: true, error: true }}>
                                {({ meta }) => (meta.touched && meta.error ? <span>{meta.error}</span> : null)}
                            </Field>
                        </div>
                    </div>
                    <Button text="Register" />
                </form>
            )}
        />
    )
}

// REGISTRATION COMPONENT
const Registration = ({ register, isRegistrationFailed }) => {

    // LAYOUT
    return (
        <div className={style.registration}>
            <div className={style.registrationForm}>
                <h2>Create an account</h2>
                <RegistrationForm register={register} />
                {isRegistrationFailed && (
                    <div style={{ color: 'red' }}>
                        <span>Something went wrong</span>
                    </div>
                )}
                <NavLink to="/login" className={style.registration__link}>Have an account? Sign In</NavLink>
            </div>
        </div>
    );
};

// EXPORTING REGISTRATION
export default Registration;