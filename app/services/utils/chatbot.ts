export const getPageText = () => {
  const metaTags = document.querySelectorAll('meta[name="description"]')
  const tagGroups = {
    metaDescription: [],
    title: [],
    h1: [],
    h2: [],
    h3: [],
    a: [],
    p: [],
    span: [],
  }

  for (let i = 0; i < metaTags.length; i++) {
    const content = metaTags[i].getAttribute("content")
    if (content) {
      tagGroups.metaDescription.push(content)
    }
  }

  const titleTag = document.querySelector("title")
  if (titleTag) {
    tagGroups.title.push(titleTag.textContent.trim())
  }

  const textTags = document.querySelectorAll("p, span, h1, h2, h3, a")
  for (let i = 0; i < textTags.length; i++) {
    const tag = textTags[i].tagName.toLowerCase()
    const textContent = textTags[i].textContent.trim()
    if (textContent) {
      tagGroups[tag].push(textContent)
    }
  }

  return JSON.stringify(tagGroups)
}

export const initialContext = `Your are the virtual assistant inside clubtal website, you will follow the conversation in the same language as the user, 
    your conversation style will be polite and helpful, your main objective will be make the user fill the contact form. 
    To understand the website where you are, following this text will be the website information,
    that information will be as a single JSON.stringify object, use it for your context, it will have the following properties: 
    metaDescription: [],
    title: [],
    h1: [],
    h2: [],
    h3: [],
    a: [],
    p: [],
    span: [] .
    The website data will be wrapped inside this sign structure """ website JSON.stringify object data """, after that data, you will read the user input.`
