const AZURE_SERVERLESS_API = "https://post-push.azurewebsites.net"
const CLUBTAL_SERVICES_API = "https://clubtal-web-services.azurewebsites.net"
const EMAIL_SERVICE_GENERAL_ENDPOINT = "/api/EmailService"
const EMAIL_SERVICE_RECRUIT_ENDPOINT = "/api/EmailServiceRecruit1"
const GENERATE_MAGIC_LINK_ENDPOINT = "/api/generate-magic-link"

export const EMAIL_SERVICE_GENERAL = `${AZURE_SERVERLESS_API}${EMAIL_SERVICE_GENERAL_ENDPOINT}`
export const EMAIL_SERVICE_RECRUIT = `${AZURE_SERVERLESS_API}${EMAIL_SERVICE_RECRUIT_ENDPOINT}`
export const GENERATE_MAGIC_LINK = `${CLUBTAL_SERVICES_API}${GENERATE_MAGIC_LINK_ENDPOINT}`
