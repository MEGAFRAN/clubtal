import { ImageProps } from "../../constants/types/components_props/types"

export const ImageContainer = ({
  src = "",
  height = "auto",
  width = "auto",
  loading = "eager",
}: ImageProps) => {
  let imageName = src.substr(src.lastIndexOf("/") + 1)

  return (
    <div className="image_container">
      <img
        src={src}
        alt={imageName || "default image"}
        height={height}
        width={width}
        loading={loading}
      />
    </div>
  )
}
