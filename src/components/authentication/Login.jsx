import React from "react";
import "./Login.css";

function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex-container">
      <div className="login-form">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <div className="login">
                <button className="login-button" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
