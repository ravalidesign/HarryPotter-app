import { useState } from "react";
import "./Dashboard.css";
import { Card } from "../Card/Card";
import { FavoritesList } from "../favoritesList/FavoritesList";
import Students from "../../JSON/hp.students.json";
import Staff from "../../JSON/hp.staff.json";
import { addFavoriteCharacter } from "../../Store/slices/characters/characters";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {
  const [isStudent, setIsstudent] = useState(true);
  const [isOpenList, setIsOpenList] = useState(false);

  const { favoriteCharacters } = useSelector(
    (state) => state.favoriteCharacters
  );
  console.log(favoriteCharacters, "FAVORITECHARACTERS");

  const dispatch = useDispatch();

  const handleFilter = (status) => {
    setIsstudent(status);
  };

  const handleSaveFavorite = (personaje) => {
    if (Students.find((item) => item.name !== personaje.name)) {
      dispatch(addFavoriteCharacter(personaje));
    } else {
      console.log("Este personaje ya existe");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpenList(true)}>Favoritos</button>
      {isOpenList &&
        favoriteCharacters.map((item) => (
          <div>
            <li key={item.name}>
              <FavoritesList name={item.name} image={item.image} />
            </li>
          </div>
        ))}

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
                handleSaveFavorite={handleSaveFavorite}
                character={item}
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
