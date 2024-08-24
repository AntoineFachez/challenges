console.clear();

const url = "https://swapi.py4e.com/api/people";

const fetchData = async () => {
  try {
    await fetch(url).then(async (response) => {
      const data = await response.json();
      const eyeColorR2D2 = data.results.find((item) => item.name === "R2-D2");
      console.log(eyeColorR2D2.eye_color);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchData();
