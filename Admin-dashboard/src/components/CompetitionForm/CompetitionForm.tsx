import { useState } from "react";

interface Competition {
  name: string;
  venue: string;
  date: string;
  maxSchools: number;
}

interface Props {
  onSubmitCompetition: (comp: Competition) => void;
}

const CompetitionForm = ({ onSubmitCompetition }: Props) => {
  const [form, setForm] = useState<Competition>({
    name: "",
    venue: "",
    date: "",
    maxSchools: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "maxSchools" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitCompetition(form);
    alert("Competition submitted!");
    setForm({ name: "", venue: "", date: "", maxSchools: 0 });
  };

  return (
    <form className="competition-form" onSubmit={handleSubmit}>
      <h2>Add Competition</h2>
      <label>
        Competition Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Venue:
        <input
          type="text"
          name="venue"
          value={form.venue}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Max Schools:
        <input
          type="number"
          name="maxSchools"
          value={form.maxSchools}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompetitionForm;
