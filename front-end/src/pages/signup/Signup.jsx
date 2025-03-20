import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
function SignUp() {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  // Validate form before submitting
  const validateForm = () => {
    let newErrors = {};
    if (!form.username) newErrors.username = "Username is required";
    if (!form.firstName) newErrors.firstName = "First Name is required";
    if (!form.lastName) newErrors.lastName = "Last Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password || form.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("/api/users/createuser", form);
      alert(response.data.msg);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formWrapper}>
        <h2>Join the Network</h2>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        <form onSubmit={handleSubmit} className={styles.formTag}>
          <input type="text" placeholder="Username" value={form.username} onChange={(e) => setField("username", e.target.value)} className={styles.inputField} />
          {errors.username && <p className={styles.error}>{errors.username}</p>}

          <div className={styles.name}>
            <input type="text" placeholder="First Name" value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} className={styles.inputField} />
            {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}

            <input type="text" placeholder="Last Name" value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} className={styles.inputField} />
            {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
          </div>

          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setField("email", e.target.value)} className={styles.inputField} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setField("password", e.target.value)} className={styles.inputField} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit" className={styles.btnSignUp}>
            Agree and Join
          </button>
        </form>

        <p className={styles.termsText}>
          By signing up, you agree to our <Link to="#">Privacy Policy</Link> and <Link to="#">Terms of Service</Link>.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
