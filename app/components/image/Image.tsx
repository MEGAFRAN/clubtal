import Image from "next/image"

export const ImageContainer = ({ src, height, width, loading }: any) => {
  let imageName = src.substr(src.lastIndexOf("/") + 1)

  return (
    <div className="image_container">
      <Image
        src={src}
        alt={imageName}
        height={height}
        width={width}
        loading={loading}
      />
    </div>
  )
}

ImageContainer.defaultProps = {
  src: "",
  alt: "default image",
  height: "auto",
  width: "auto",
  loading: "eager",
}
