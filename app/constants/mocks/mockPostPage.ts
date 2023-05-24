import HOME_TEXT from "../../services/pages/home-text"

const currentLanguage = { ...HOME_TEXT.spanish }
const { ctaButtonTexts } = currentLanguage
const mockResponsePageYear = {
  buttonText: ctaButtonTexts[0],
  mail: "info@clubtal.com",
  withLanguageToggle: false,
  yearPost: 2023,
  posts: [
    {
      title: "First post 1",
      id: 21032023,
      nameAuthor: "Clubtal",
      date: "2023-03-21",
      readingTime: "5 min read",
      category: "IA",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
    },
    {
      title: "Second post 2",
      id: 28032023,
      nameAuthor: "Chanchito",
      date: "2023-04-01",
      readingTime: "6 min read",
      category: "IA",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
    },
  ],
}

export default mockResponsePageYear
