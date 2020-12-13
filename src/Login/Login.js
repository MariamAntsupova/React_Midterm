import React, { useState } from 'react';
import LoginForm from "../Components/LoginForm";
function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [ user, setUser ] = useState({name: "", email: ""});
  const [error, serError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password )
    {console.log("logged in");
    setUser({
      name: details.name,
      email: details.email
    });
    }  else{ 
      console.log("do not match ! "); 
      }
  }


  const Logout = () => {
    setUser({name:"", email:""});
  }


  return (
    <div className="App">
      {(user.email != "")? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout} className="logout">Logout</button>
        </div>
      ) : (
      <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
