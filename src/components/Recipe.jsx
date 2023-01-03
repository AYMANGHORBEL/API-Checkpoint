import axios from "axios";
import React, { useState } from "react";

const Recipe = () => {
  const [text, settext] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loading, setloading] = useState(true);
  const options = {
    method: "GET",
    url: "https://calorieninjas.p.rapidapi.com/v1/nutrition",
    params: { query: text },
    headers: {
      "X-RapidAPI-Key": "eb836b6ba3mshd1407c86895d30cp159f06jsnd74e9c3e54c3",
      "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
    },
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        console.log(res.data);
        setRecipe(res.data.items);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    settext("");
  };
  return (
    <div>
      <form action="" onSubmit={handeleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button>Search</button>
      </form>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          {recipe.map((el) => (
            <div style={{ border: "2px solid red", borderRadius: "30px" }}>
              <h2> {el.name}</h2>
              <h2>{el.sodium_mg} </h2>
              <h2> {el.calories} </h2>
              <h2> {el.carbohydrates_total_g}</h2>
              <h2> {el.cholesterol_mg}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipe;
