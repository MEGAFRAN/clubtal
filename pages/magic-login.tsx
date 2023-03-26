import { useRouter } from "next/router"
import { MagicLinkComponent } from "../app/components/magic_link/MagicLinkComponent"

const MagicLogin = () => {
  const router = useRouter()

  return <MagicLinkComponent />
}
export default MagicLogin
