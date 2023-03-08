import React from "react";
import "./Login.css";

function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const users = [
    {
      email: "admin1",
      password: "12345678",
    },
    {
      email: "admin2",
      password: "012345678",
    },
  ];

  const validateUser = () => {
    const checkUser = users.find(
      (obj) => obj.email === user.email && obj.password === user.password
    );
    checkUser
      ? console.log("Login successful")
      : console.log("Wrong email or password");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUser(users);
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
                required
              />
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
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
