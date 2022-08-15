import {
  GTM_MAIN_SCRIPT,
  GTM_NO_SCRIPT,
} from "../../../constants/analytics/google_tag_manager/gtmScripts"

export const SectionAnalytics = () => {
  return (
    <>
      {GTM_MAIN_SCRIPT}
      {GTM_NO_SCRIPT}
    </>
  )
}
