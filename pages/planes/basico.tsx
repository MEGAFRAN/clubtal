import PageHead from "../../app/components/page_head/PageHead"
import SubscriptionForm from "../../app/components/subscription_form/company/SubscriptionFormCompany"

const BasicPage = () => (
  <>
    <PageHead description={"hello"} title={"siaki"} locale={"es"} url={"https://www.siaki.co"} />
    <SubscriptionForm categoryOptions={["medicos", "abogados"]} />
  </>
)

export default BasicPage
