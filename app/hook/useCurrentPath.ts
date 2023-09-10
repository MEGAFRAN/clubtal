import { useRouter } from "next/router"

function useCurrentPath(): string {
  const router = useRouter()
  return router.asPath
}

export default useCurrentPath
