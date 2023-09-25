import Link from "next/link"
import styles from "../../styles/components/card.module.scss"

const BottomBar: React.FC = () => (
  <div className={styles.container}>
    <Link className={styles.button} href="/inscribe-tu-negocio">
      Registra tu servicio
    </Link>
    <Link className={styles.button} href="/pageB">
      Refiere y gana $
    </Link>
  </div>
)

export default BottomBar
