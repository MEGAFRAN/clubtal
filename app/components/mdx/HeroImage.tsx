interface HeroImageProps {
  src: string
  alt: string
}
function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <figure className={"mdx-hero-image"}>
      <img src={src} alt={alt} width={500} height={500}></img>
    </figure>
  )
}
export default HeroImage
