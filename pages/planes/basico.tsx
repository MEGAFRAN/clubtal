import PageHead from "../../app/components/page_head/PageHead"
import SubscriptionForm from "../../app/components/subscription_form/SubscriptionForm"

const BasicPage = () => (
  <>
    <PageHead description={"hello"} title={"siaki"} locale={"es"} url={"https://www.siaki.co"} />
    <SubscriptionForm categoryOptions={["doctores", "abogados", "plomeros"]} />
  </>
)

export default BasicPage
