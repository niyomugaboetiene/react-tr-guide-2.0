import "./register.css";

function Register() {
  return (
    <div className="register">
      <fieldset className="fieldset">
        <legend>Registration Form</legend>

        <label>First Name</label>
        <input type="text" placeholder="First name" />

        <label>Last Name</label>
        <input type="text" placeholder="Last name" />

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <label>Address</label>
        <input type="text" placeholder="Address" />

        <div className="button">
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn register-btn">Register</button>
        </div>
      </fieldset>
    </div>
  );
}

export default Register;
