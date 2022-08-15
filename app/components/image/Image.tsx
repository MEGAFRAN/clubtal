import Image, { ImageProps } from "next/image"

export const ImageContainer = ({
  src = "",
  height = "auto",
  width = "auto",
  loading = "eager",
}: ImageProps) => {
  let imageName = src.substr(src.lastIndexOf("/") + 1)

  return (
    <div className="image_container">
      <Image
        src={src}
        alt={imageName || "default image"}
        height={height}
        width={width}
        loading={loading}
      />
    </div>
  )
}
