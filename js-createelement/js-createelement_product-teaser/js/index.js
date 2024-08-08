console.clear();

const fishData = [
  {
    fish: {
      name: "Queen angelfish",
      description:
        "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.",

      categories: [
        { category: "Freshwater" },
        { category: "Large aquarium" },
        { category: "Plankton Diet" },
      ],
      price: "149,99 €",
      imageSrc:
        "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640",
    },
  },

  {
    fish: {
      name: "Royal Angelfish",
      description:
        "This regal angelfish boasts a majestic combination of royal blue and gold scales, a true jewel of the aquatic world. It reaches an impressive size of 50 cm and is known for its peaceful demeanor, making it a great addition to community tanks.",
      categories: [
        { category: "Saltwater" },
        { category: "Large aquarium" },
        { category: "Varied Diet" },
      ],
      price: "199,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pez_%C3%A1ngel_real_%28Pygoplites_diacanthus%29%2C_parque_nacional_Ras_Muhammad%2C_Egipto%2C_2022-03-26%2C_DD_155.jpg/1280px-Pez_%C3%A1ngel_real_%28Pygoplites_diacanthus%29%2C_parque_nacional_Ras_Muhammad%2C_Egipto%2C_2022-03-26%2C_DD_155.jpg",
    },
  },
  {
    fish: {
      name: "Neon Tetra",
      description:
        "Neon tetras are small, vibrant fish with shimmering blue and red stripes. Their peaceful nature and schooling behavior make them a popular choice for community aquariums.",
      categories: [
        { category: "Freshwater" },
        { category: "Small aquarium" },
        { category: "Omnivore" },
      ],
      price: "2,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Neonsalmler_Paracheirodon_innesi.jpg/1280px-Neonsalmler_Paracheirodon_innesi.jpg",
    },
  },
  {
    fish: {
      name: "Dwarf Gourami",
      description:
        "Dwarf gouramis are colorful labyrinth fish known for their flowing fins and peaceful temperament. They come in various colors and are a great addition to planted aquariums.",
      categories: [
        { category: "Freshwater" },
        { category: "Small to medium aquarium" },
        { category: "Omnivore" },
      ],
      price: "5,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Colisa_lalia-Male_and_Female.jpg",
    },
  },
  {
    fish: {
      name: "Betta Fish (Siamese Fighting Fish)",
      description:
        "Betta fish, also known as Siamese fighting fish, are renowned for their vibrant colors and flowing fins. Males are particularly striking. They require separate tanks due to their territorial nature but make fascinating solitary pets.",
      categories: [
        { category: "Freshwater" },
        { category: "Small aquarium" },
        { category: "Carnivore" },
      ],
      price: "7,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HM_Orange_M_Sarawut.jpg/1280px-HM_Orange_M_Sarawut.jpg",
    },
  },
  {
    fish: {
      name: "Guppy",
      description:
        "Guppies are small, live-bearing fish that come in a dazzling array of colors and patterns. They are easy to care for and breed, making them popular among beginners and experienced aquarists alike.",
      categories: [
        { category: "Freshwater" },
        { category: "Small aquarium" },
        { category: "Omnivore" },
      ],
      price: "1,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Guppy_coppia_gialla.jpg",
    },
  },
  {
    fish: {
      name: "Plecostomus (Common Pleco)",
      description:
        "The common pleco is a large catfish known for its algae-eating abilities. They are essential for maintaining clean tanks and are popular for their unique appearance and scavenging behavior.",
      categories: [
        { category: "Freshwater" },
        { category: "Large aquarium" },
        { category: "Herbivore/Detritivore" },
      ],
      price: "12,99 €",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Liposarcus_multiradiatus_01_ssj_20050321.jpg",
    },
  },
];

// const name = "Queen angelfish";
// const description =
//   "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
// const category1 = "Freshwater";
// const category2 = "Large aquarium";
// const category3 = "Plankton Diet";
// const price = "149,99 €";
// const imageSrc =
//   "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const init = () => {
  console.log("init");
  appendBody();
};
const body = document.querySelector("body");

const createCategories = (data) => {
  const categories = document.createElement("ul");
  categories.classList.add("product__categories");

  data.fish.categories.forEach((category) => {
    const temp = document.createElement("li");

    temp.classList.add("product__category");
    temp.textContent = category.category;

    categories.append(temp);
  });
  return categories;
};

const createProductBody = (tileData) => {
  const productBody = document.createElement("div");
  productBody.classList.add("product__body");

  const textContainer = createTextContainer(tileData);
  const image = createImageContainer(tileData);

  productBody.append(textContainer, image);
  return productBody;
};

const createTextContainer = (tileData) => {
  const productTextContainer = document.createElement("div");
  const headerTitle = document.createElement("h2");
  headerTitle.textContent = tileData.fish.name;

  const categories = createCategories(tileData);
  const description = createProductDescription(tileData);

  productTextContainer.append(headerTitle, categories, description);

  return productTextContainer;
};
const createProductDescription = (tileData) => {
  const description = document.createElement("p");

  description.classList.add("product__description");
  description.textContent = tileData.fish.description;

  return description;
};
const createImageContainer = (tileData) => {
  const container = document.createElement("div");
  const image = document.createElement("img");

  container.classList.add("product__image-container");
  image.classList.add("product__image");

  image.src = tileData.fish.imageSrc;
  image.alt = tileData.fish.name;

  container.append(image);

  return container;
};
const createProductFooter = (tileData) => {
  const footer = document.createElement("footer");
  const price = document.createElement("span");
  const button = document.createElement("button");

  footer.classList.add("product__footer");
  price.classList.add("product__price");
  button.classList.add("product__buy-button");

  price.textContent = tileData.fish.price;
  button.textContent = "buy";

  footer.append(price, button);

  return footer;
};
const createProductTile = (tileData) => {
  const productTile = document.createElement("article");
  const productBody = createProductBody(tileData);
  const productFooter = createProductFooter(tileData);

  productTile.classList.add("product");

  productTile.append(productBody, productFooter);

  return productTile;
};

const appendBody = () => {
  const productsData = fishData;

  productsData.forEach((product) => {
    const productTile = createProductTile(product);
    body.append(productTile);
  });
};

window.addEventListener("load", init);
