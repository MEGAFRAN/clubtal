import {
  GTM_MAIN_SCRIPT,
  GTM_NO_SCRIPT,
} from "../../../constants/analytics/google_tag_manager/gtmScripts"

const SectionAnalytics = () => (
  <>
    {GTM_MAIN_SCRIPT}
    {GTM_NO_SCRIPT}
  </>
)
export default SectionAnalytics
