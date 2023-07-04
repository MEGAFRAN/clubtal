import React from "react"
import Link from "next/link"
import styles from "../../styles/components/footer.module.scss"

interface FooterLinkProps {
  href: string
  label: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link href={href}>{label}</Link>
  </li>
)

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <ul>
      <FooterLink href="/personal-data-policy" label="Politica datos personales" />
    </ul>
  </footer>
)

export default Footer
