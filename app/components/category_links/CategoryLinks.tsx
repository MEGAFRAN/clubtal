import Link from "next/link"
import styles from "../../styles/components/categoryLinks.module.scss"
import useCurrentPath from "../../hook/useCurrentPath"

const CategoryLinks = ({ categories }: any) => {
  const currentPath = useCurrentPath()

  return (
    <div className={styles.container}>
      {categories.map((category: any) => (
        <Link key={category} href={`${currentPath}${category}`}>
          {category}
        </Link>
      ))}
    </div>
  )
}
export default CategoryLinks
