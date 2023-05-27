import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PageHead from "./PageHead"

describe("PageHead", () => {
    const defaultProps = {
      description: "Test Description",
      title: "Test Title",
      locale: "en_US",
      url: "https://example.com",
      favicon: "/favicon.ico",
      name: "Test Name",
      themeColor: "#212121",
    }
  
    it("renders element", () => {
      render(<PageHead {...defaultProps} />)
      
      expect(document.querySelector("title")).toHaveTextContent(defaultProps.title)
      expect(document.querySelector("meta[name=\"description\"]")).toHaveAttribute("content", defaultProps.description)
      expect(document.querySelector("meta[property=\"og:locale\"]")).toHaveAttribute("content", defaultProps.locale)
      expect(document.querySelector("meta[property=\"og:title\"]")).toHaveAttribute("content", defaultProps.title)
      expect(document.querySelector("meta[property=\"og:description\"]")).toHaveAttribute("content", defaultProps.description)
      expect(document.querySelector("meta[property=\"og:image\"]")).toHaveAttribute("content", defaultProps.favicon)
      expect(document.querySelector("meta[property=\"og:site_name\"]")).toHaveAttribute("content", defaultProps.name)
      expect(document.querySelector("meta[property=\"og:url\"]")).toHaveAttribute("content", defaultProps.url)
      expect(document.querySelector("link[rel=\"canonical\"]")).toHaveAttribute("href", defaultProps.url)
      expect(document.querySelector("link[rel=\"icon\"]")).toHaveAttribute("href", defaultProps.favicon)
      expect(document.querySelector("meta[name=\"theme-color\"]")).toHaveAttribute("content", defaultProps.themeColor)
    })
  })
