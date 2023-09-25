import PageHead from "../../app/components/page_head/PageHead"
import SubscriptionWorkflow from "../../app/components/subscription_workflow/SubscriptionWorkflow"

const BasicPage = () => (
  <>
    <PageHead description={"hello"} title={"siaki"} locale={"es"} url={"https://www.siaki.co"} />
    <SubscriptionWorkflow />
  </>
)

export default BasicPage
