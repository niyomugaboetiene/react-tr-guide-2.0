function Register() {
    return (
        <div>
            <fieldset>
                <legend>Registration Form</legend>
                <label>First Name</label>
                <input type="text"  placeholder="First name" /> <br />
                <label>Last Name</label>
                <input type="text"  placeholder="Last name"/> <br />
                <label>Email</label>
                <input type="text"  placeholder="Email"/> <br />
                <label>Address</label>
                <input type="text"  placeholder="Address"/> <br />
                <button>Cancel</button>
                <button>Address</button>
                </fieldset>
        </div>
    )
}

export default Register;