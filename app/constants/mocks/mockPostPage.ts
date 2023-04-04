import HOME_TEXT from "../../services/pages/home-text"

const currentLanguage = { ...HOME_TEXT.spanishText }
const { homeNavbarOptions, ctaButtonTexts } = currentLanguage
const mockResponsePageYear = {
  options: homeNavbarOptions,
  buttonText: ctaButtonTexts[0],
  mail: "info@clubtal.com",
  withLanguageToggle: false,
  yearPost: 2023,
  cardPosts: [
    {
      title: "First post 1",
      id: 21032023,
      nameAuthor: "Clubtal",
      data: new Date(2023, 2, 21),
      readingTime: "5 min read",
      category: "IA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
    },
    {
      title: "Second post 2",
      id: 28032023,
      nameAuthor: "Chanchito",
      data: new Date(2023, 3, 1),
      readingTime: "6 min read",
      category: "IA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
    },
  ],
}

export default mockResponsePageYear
