import "./CreateJudgeForm.css";
import { useState } from "react";

interface Judge {
  firstName: string;
  lastName: string;
  email: string;
  idNumber: string;
  password: string;
}

interface Props {
  onSubmitJudge: (judge: Judge) => void;
}

const CreateJudgeForm: React.FC<Props> = ({ onSubmitJudge }) => {
  const [form, setForm] = useState<Judge>({
    firstName: "",
    lastName: "",
    email: "",
    idNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitJudge(form); // Send judge data to App
    console.log("Judge Submitted:", form);
    alert("Judge created successfully!");

    // Optionally clear the form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      idNumber: "",
      password: "",
    });
  };

  return (
    <form className="judge-form" onSubmit={handleSubmit}>
      <h2>Create Judge</h2>

      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        ID Number
        <input
          type="text"
          name="idNumber"
          value={form.idNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateJudgeForm;
