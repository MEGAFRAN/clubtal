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
      data: "2023-03-21",
      readingTime: "5 min read",
      category: "IA",
      contentPost: [
        {
          titleContent: "Title content 21",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
        },
        {
          titleContent: "Title content 22",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore! 02",
        },
      ],
    },
    {
      title: "Second post 2",
      id: 28032023,
      nameAuthor: "Chanchito",
      data: "2023-04-01",
      readingTime: "6 min read",
      category: "IA",
      contentPost: [
        {
          titleContent: "Title content 21",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
        },
        {
          titleContent: "Title content 22",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore! 02",
        },
      ],
    },
  ],
}

export default mockResponsePageYear
