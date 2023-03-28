import { SectionContentPostProps } from "../../../constants/types/components_props/types"

function SectionContentPost({ contentPost }: SectionContentPostProps) {
  return (
    <ul>
      {contentPost
        ? contentPost.map((content, index) => (
            <section key={`${index}${content.titleContent}`} role="contentinfo">
              <h2>{content.titleContent}</h2>
              <p>{content.descriptionContent}</p>
            </section>
          ))
        : null}
    </ul>
  )
}
export default SectionContentPost
