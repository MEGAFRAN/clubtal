import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/components/categoryLinks.module.scss"

const CategoryLinks = ({ categories }: any) => {
  const router = useRouter()
  const currentPath = router.asPath

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
