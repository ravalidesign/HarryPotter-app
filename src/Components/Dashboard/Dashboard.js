import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { FavoritesList } from "../favoritesList/FavoritesList";
import logohp from "../../assets/logohp.png";
import favoriteIcon from "../../assets/favoriteIcon.png";
import addIcon from "../../assets/addIcon.png";
import {
  addFavoriteCharacter,
  deleteFavoriteCharacters,
} from "../../Store/slices/characters/characters";
import { useDispatch, useSelector } from "react-redux";
import { helpHttp } from "../../helpers/helpHttp";

export const Dashboard = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [db, setDb] = useState([]);
  const [filter, setFilter] = useState([]);

  console.log(db.map((item) => item));

  const filterCharacter = (degree) => {
    if (degree === "students") {
      setFilter(db.filter((item) => item.hogwartsStudent === true));
    }
    if (degree === "staff") {
      setFilter(db.filter((item) => item.hogwartsStudent === false));
    }
  };
  let api = helpHttp();
  let url = "http://localhost:5000/characters";

  useEffect(() => {
    api.get(url).then((res) => setDb(res));
  }, []);

  const { favoriteCharacters } = useSelector(
    (state) => state.favoriteCharacters
  );

  const dispatch = useDispatch();

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
            <button onClick={() => filterCharacter("students")}>
              ESTUDIANTES
            </button>
            <div className="space-button"></div>
            <button onClick={() => filterCharacter("staff")}>STAFF</button>
          </div>
        </div>
      </div>
      <div className="dashboard-cards-content">
        {filter.map((item) => (
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
        {db.map((item) => (
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
