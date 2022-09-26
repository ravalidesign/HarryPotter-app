import { useState } from "react";
import { Card } from "../Card/Card";
import { FavoritesList } from "../favoritesList/FavoritesList";
import characters from "../../JSON/characters.json";
import logohp from "../../assets/logohp.png";
import favoriteIcon from "../../assets/favoriteIcon.png";
import addIcon from "../../assets/addIcon.png";
import {
  addFavoriteCharacter,
  deleteFavoriteCharacters,
} from "../../Store/slices/characters/characters";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {
  const [isStudent, setIsstudent] = useState(true);
  const [isOpenList, setIsOpenList] = useState(false);

  const { favoriteCharacters } = useSelector(
    (state) => state.favoriteCharacters
  );

  const dispatch = useDispatch();

  const handleFilter = (status) => {
    setIsstudent(status);
  };

  const handleSaveFavorite = (personaje) => {
    dispatch(addFavoriteCharacter(personaje));
  };

  const handleDeleteFavoriteCharacters = (name) => {
    dispatch(deleteFavoriteCharacters(name));
  };

  return (
    <div className="background">
      <div className="header-content">
        <div className="header-buttons">
          <button onClick={() => setIsOpenList(true)}>
            FAVORITOS <img src={favoriteIcon} alt="favoriteIcon" />
          </button>
          <button>
            AGREGAR <img src={addIcon} alt="addIcon" />
          </button>
        </div>
        {isOpenList &&
          favoriteCharacters.map((item) => (
            <div className="favorite-characters-list" key={item.name}>
              <FavoritesList
                name={item.name}
                image={item.image}
                handleDeleteFavoriteCharacters={handleDeleteFavoriteCharacters}
              />
            </div>
          ))}
        <div className="dashboards-button-content">
          <div className="logohp-img">
            <img src={logohp} alt="logoHp" />
            <p>Selecciona tu filtro</p>
          </div>
          <div className="filter-characters-buttons">
            <button onClick={() => handleFilter(true)}>ESTUDIANTES</button>
            <div className="space-button"></div>
            <button onClick={() => handleFilter(false)}>STAFF</button>
          </div>
        </div>
      </div>
      <div className="dashboard-cards-content">
        {isStudent
          ? characters.students.map((item) => (
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
                house={item.house}
              />
            ))
          : characters.staff.map((item) => (
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
                house={item.house}
              />
            ))}
      </div>
    </div>
  );
};
