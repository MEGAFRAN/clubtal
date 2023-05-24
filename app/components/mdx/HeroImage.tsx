import Image from "next/image"

interface HeroImageProps {
  src: string
  alt: string
}
function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <figure className={"mdx-hero-image"}>
      <Image src={src} alt={alt} width={500} height={500}></Image>
    </figure>
  )
}
export default HeroImage
