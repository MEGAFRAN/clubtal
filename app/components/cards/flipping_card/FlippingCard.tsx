import { CardProps } from "../../../constants/types/components_props/types"

export const FlippingCard = ({
  title = "default title",
  description = "default description",
  imageUrl = "",
  id,
  tags = [],
  featured,
}: CardProps) => {
  return (
    <div className="card__container">
      <div tabIndex={0} className="card__inner">
        <div className="card__inner--front">
          <div className="card__inner--front-header">
            <img src={imageUrl} loading="lazy" alt={title} />

            {featured ? <span className="card__inner--front-header-featured">Featured</span> : null}
          </div>

          <div className="card__inner--front-body">
            <h1>{title}</h1>

            <p>{description}</p>
          </div>
        </div>

        <div className="card__inner--back">
          <div className="card__inner--back-header">
            <img src={imageUrl} loading="lazy" alt={title} />
          </div>

          <div className="card__inner--back-body">
            <h1>{title}</h1>

            <div className="card__inner--back-tags-container">
              {tags ? (
                tags.map((tag) => (
                  <div className="card__inner--back-tag" key={tag}>
                    {tag}
                  </div>
                ))
              ) : (
                <div>No tags</div>
              )}
            </div>
          </div>

          <a className="card__inner--back-cta" href="#" target="_blank" rel="noopener noreferrer">
            LEARN MORE{" "}
          </a>
        </div>
      </div>
    </div>
  )
}
