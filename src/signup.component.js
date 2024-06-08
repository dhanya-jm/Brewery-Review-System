// import React, { Component } from 'react';

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { username, email, password } = this.state;
//     console.log(username, email, password);
//     fetch("http://localhost:5000/register", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         password,
//       }),
//     }).then((res) => res.json())
//       .then((data) => {
//         console.log(data, "user register");
//         if (data.status === "ok") {
//           alert("Registration Successful");
//           this.setState({
//             username: "",
//             email: "",
//             password: "",
//           }); // Reset form fields to initial values
//         } else {
//           alert("Something went wrong");
//         }
//       });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign Up</h3>

//         <div className="mb-3">
//           <label>Username</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter username"
//             onChange={e => this.setState({ username: e.target.value })}
//             value={this.state.username}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={e => this.setState({ email: e.target.value })}
//             value={this.state.email}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={e => this.setState({ password: e.target.value })}
//             value={this.state.password}
//           />
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     );
//   }
// }
