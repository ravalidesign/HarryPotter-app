import { useState } from "react";
import "./Dashboard.css";
import { Card } from "../Card/Card";
import Students from "../../JSON/hp.students.json";
import Staff from "../../JSON/hp.staff.json";

export const Dashboard = () => {
  const [isStudent, setIsstudent] = useState(true);

  const handleFilter = (status) => {
    setIsstudent(status);
  };

  return (
    <>
      <button onClick={() => handleFilter(true)}>Estudiantes</button>
      <button onClick={() => handleFilter(false)}>Staff</button>
      <div className="dashboard-content">
        {isStudent
          ? Students.map((item) => (
              <Card
                key={item.name}
                status={item.alive ? "vivo" : "finado"}
                degree={item.hogwartsStudent ? "Estudiante" : "Staff"}
                image={item.image}
                name={item.name}
                dateOfBirth={item.dateOfBirth}
                gender={item.gender}
                eyeColour={item.eyeColour}
                hairColour={item.hairColour}
              />
            ))
          : Staff.map((item) => (
              <Card
                key={item.name}
                status={item.alive ? "vivo" : "finado"}
                degree={item.hogwartsStudent ? "Estudiante" : "Staff"}
                image={item.image}
                name={item.name}
                dateOfBirth={item.dateOfBirth}
                gender={item.gender}
                eyeColour={item.eyeColour}
                hairColour={item.hairColour}
              />
            ))}
      </div>
    </>
  );
};
