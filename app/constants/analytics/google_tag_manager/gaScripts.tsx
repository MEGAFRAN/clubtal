import Script from "next/script"

export const GA_MAIN_SCRIPT = 
<>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YXL3TKP53M"></script>
    
    <Script
        strategy="afterInteractive"
        id="ga"
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXL3TKP53M', {
            page_path: window.location.pathname,
            });
            `,
        }}
    />
</>