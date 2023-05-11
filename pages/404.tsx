// to detect language and automatically redirect to the approprate/[locale] page
// import { Redirect } from '../lib/redirect'
// export default Redirect

// to keep this root page with the defaultLocale
import NotFound, { getStaticProps } from "./[locale]/404"

export default NotFound
export { getStaticProps }
