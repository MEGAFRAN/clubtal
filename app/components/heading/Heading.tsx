

export const Title = ( {title, headingType}: any ) => 
{

    let createHeading = headingType === 'h1' ?  <h1> {title} </h1> :
                        headingType === 'h2' ?  <h2> {title} </h2> : 
                        headingType === 'h3' ?  <h3> {title} </h3> :
                                                <h4> {title} </h4>
    

    return (

      <div className="title-container" 
           data-headingType={headingType}>

            {createHeading}

      </div>  
      
    )

}

Title.defaultProps = 
{ 
  headingType: 'h1',
  title: 'default title'
}
