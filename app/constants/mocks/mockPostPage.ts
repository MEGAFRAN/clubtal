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
      date: "2023-03-21T02:16:27.000Z",
      readingTime: "5 min read",
      category: "IA",
      language: "english",
      overview: `
      <p>In the fast-paced and stressful world we live in, it&#8217;s common for many people to experience anxiety at some point in their lives. Anxiety can manifest in different ways, from feeling restless or nervous to experiencing panic attacks. Fortunately, there are effective strategies to cope with anxiety and find inner calm. In this article, we will explore some practical tips that will help you manage anxiety and improve your emotional well-being.</p>`,
    },
    {
      title: "Second post 2",
      id: 28032023,
      nameAuthor: "Chanchito",
      date: "2023-04-01T02:13:40.000Z",
      readingTime: "6 min read",
      category: "IA",
      language: "english",
      overview: `
      <p>In the fast-paced and stressful world we live in, it&#8217;s common for many people to experience anxiety at some point in their lives. Anxiety can manifest in different ways, from feeling restless or nervous to experiencing panic attacks. Fortunately, there are effective strategies to cope with anxiety and find inner calm. In this article, we will explore some practical tips that will help you manage anxiety and improve your emotional well-being.</p>`,
    },
  ],
}

export default mockResponsePageYear
