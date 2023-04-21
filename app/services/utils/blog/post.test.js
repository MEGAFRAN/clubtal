import fs from "fs/promises"
import functionPost from "./post"
import mockPost1 from "../../../constants/mocks/mockListPost1.json"
import mockPost2 from "../../../constants/mocks/mockListPost2.json"

const { mapPostToCardPost, getYearMonthDayFromString, getInformationFromFile } = functionPost
jest.mock("fs/promises")
describe("mapPostToCardPost", () => {
  it("Should return attributes only of cardPost", () => {
    const post = [
      {
        title: "Test Post",
        id: 1,
        nameAuthor: "John Doe",
        data: "2022-01-01",
        readingTime: "5 min",
        category: "Technology",
        contentPost: [
          {
            descriptionContent: "This is a test post.",
          },
        ],
      },
    ]
    const expectedCardPost = [
      {
        title: "Test Post",
        id: 1,
        nameAuthor: "John Doe",
        data: "2022-01-01",
        readingTime: "5 min",
        category: "Technology",
        description: "This is a test post.",
      },
    ]
    expect(mapPostToCardPost(post)).toEqual(expectedCardPost)
  })
  it("Should return empty properties and same length of input", () => {
    const posts = [
      {
        title: "",
        id: 1,
        nameAuthor: "",
        data: "",
        readingTime: "",
        category: "",
        contentPost: [{ descriptionContent: "" }],
      },
      {
        title: "Test Post",
        id: 2,
        nameAuthor: "John Doe",
        data: "2022-01-01",
        readingTime: "5 min",
        category: "Technology",
        contentPost: [{ descriptionContent: "This is a test post." }],
      },
    ]

    const expectedCardPosts = [
      {
        title: "",
        id: 1,
        nameAuthor: "",
        data: "",
        readingTime: "",
        category: "",
        description: "",
      },
      {
        title: "Test Post",
        id: 2,
        nameAuthor: "John Doe",
        data: "2022-01-01",
        readingTime: "5 min",
        category: "Technology",
        description: "This is a test post.",
      },
    ]
    const expectLengthCardPosts = posts.length
    expect(mapPostToCardPost(posts)).toEqual(expectedCardPosts)
    expect(mapPostToCardPost(posts)).toHaveLength(expectLengthCardPosts)
  })
})

describe("getYearMonthDayFromString", () => {
  it("Should trows an error when input has invalid date", () => {
    expect(() => getYearMonthDayFromString("2022-02")).toThrow()
    expect(() => getYearMonthDayFromString("2022-02-31")).toThrow()
    expect(() => getYearMonthDayFromString("2022-02-a")).toThrow()
    expect(() => getYearMonthDayFromString("2022/02/14")).toThrow()
  })
  it("Should return year, month and day correctly", () => {
    const mockDateString = "2022-07-22"
    const expectYearMonthDay = { yearPost: "2022", monthPost: "07", dayPost: "22" }
    const result = getYearMonthDayFromString(mockDateString)
    expect(result).toEqual(expectYearMonthDay)
  })
})

describe("getInformationFromFile", () => {
  it("Should return empty array when not found any files", async () => {
    const mockFiles = []
    const resultReadFiles = await Promise.all(getInformationFromFile(mockFiles))
    expect(resultReadFiles).toEqual([])
  })
  it("Should return correct information with attributes of each files", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-01.json"]
    const expectReadFiles = [
      {
        title: "First post 1",
        id: 20230321,
        nameAuthor: "Clubtal",
        data: "2023-03-04",
        readingTime: "5 min read",
        category: "IA",
        contentPost: [
          {
            titleContent: "Title content 1",
            descriptionContent:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
          },
          {
            titleContent: "Title content 2",
            descriptionContent:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore! 02",
          },
        ],
      },
      {
        title: "First post 3",
        id: 20230321,
        nameAuthor: "Clubtal",
        data: "2023-03-21",
        readingTime: "5 min read",
        category: "Performance",
        contentPost: [
          {
            titleContent: "Title content 3",
            descriptionContent:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
          },
          {
            titleContent: "Title content 2",
            descriptionContent:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore! 02",
          },
        ],
      },
    ]
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const resultFilesRead = await Promise.all(getInformationFromFile(mockFiles))
    expect(resultFilesRead).toEqual(expectReadFiles)
  })
})
