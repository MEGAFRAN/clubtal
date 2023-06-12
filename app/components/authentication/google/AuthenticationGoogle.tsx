import Script from "next/script"
import React, { useEffect } from "react"

interface AuthenticationGoogleProps {
  clientID: string
}

const AuthenticationGoogle: React.FC<AuthenticationGoogleProps> = ({ clientID }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.src = "https://accounts.google.com/gsi/client"
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
    return undefined
  }, [])

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={clientID}
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      />

      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      />

      <Script id="handleCredentialResponseScript" strategy="afterInteractive">
        {`
                function decodeJwtResponse(response) {
                  // Add your JWT decoding logic here
                  return JSON.parse(atob(response.split('.')[1]));
                }
      
                function handleCredentialResponse(response) {
                  console.log(response);
                }
              `}
      </Script>
    </>
  )
}

export default AuthenticationGoogle
