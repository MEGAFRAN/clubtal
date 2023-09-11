import React, { useCallback, useMemo } from "react"
import Link from "next/link"
import useCurrentPath from "../../hook/useCurrentPath"
import styles from "../../styles/components/breadcrumb.module.scss"

type BreadcrumbProps = {
  baseLabel?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ baseLabel = "siaki" }) => {
  const currentPath = useCurrentPath()
  const pathSegments = useMemo(() => currentPath.split("/").filter((p) => p), [currentPath])

  const getBreadcrumbLink = useCallback(
    (index: number) => `/${pathSegments.slice(0, index + 1).join("/")}`,
    [pathSegments],
  )

  return (
    <nav aria-label="Breadcrumb" className={styles.container}>
      <ul>
        <li>
          <Link href="/">{baseLabel}</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment}>
            <span className={styles.separator}>&gt;</span>
            <Link href={getBreadcrumbLink(index)}>{segment}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(Breadcrumb)
