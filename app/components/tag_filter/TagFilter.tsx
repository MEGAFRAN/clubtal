import { useContext, useEffect, useState } from "react"
import { HomeContext } from "../../contexts/Home"


export const TagFilter = ({title='Default tag title', setFilteredValues}:any) => {

    const contextData = useContext(HomeContext)

    const TAGS_DATA = Object.entries(contextData).map((item: any) => item[1])

    const ALL_TAGS = TAGS_DATA.map(tag => tag.tags).reduce((array, record) => array.concat(record), [])

    const UNIQUE_TAGS = Array.from( new Set(ALL_TAGS) )

    const [filters, setFilters] = useState(TAGS_DATA)

    const validateFilterValues = (eventValue: any) => filters.includes(eventValue) 
                                                        ? setFilters( filters.filter(item => item !== eventValue) ) 
                                                        : setFilters( [...filters, eventValue] )

    

    useEffect(() => setFilteredValues(filters), [filters, setFilteredValues])
    

    let tagList = UNIQUE_TAGS.map((tag: any) => (

        <div tabIndex={0} key={tag} className="tag-filter__container--dropdown-option">

            <input id={tag} className="tag" type="checkbox" name={tag} 
            onChange={event => validateFilterValues(event.target.name)} /> 
            
            <label htmlFor={tag}>{tag}</label>
            
        </div>
    ))

    
    
    return (

        <div tabIndex={0} className="tag-filter__container">

            <div className="tag-filter__container--dropdown">

                {TAGS_DATA ? tagList : <div className="tag">{title}</div>}
                
            </div>
            
        </div>
    )
    
}

