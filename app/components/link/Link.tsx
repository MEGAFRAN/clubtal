


export const Link = ( {title, href, target, children}: any ) =>
{

    return (

        <a href={href} target={target} title={title}> 

            {children}
  
        </a>

    )


}

Link.defaultProps = 
{ 
  href: "",
  target: "_self",
  title: ""
}
