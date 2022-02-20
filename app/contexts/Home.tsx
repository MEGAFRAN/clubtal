import React, { useState, useContext, useEffect } from "react";
import serviceObject from "../services/utils/service-object";
import { testService } from "../services/service_objects/test";

const HomeContext = React.createContext(undefined)
const HomeUpdateContext = React.createContext(undefined)

export function useHome() {
    return useContext(HomeContext)
}

export function useHomeUpdate() {
    return useContext(HomeUpdateContext)
}


export const HomeProvider = ({children}:any) =>
{
    const [componentData, setComponentData] = useState()
    
    useEffect(()=>
    {
      async function _getData () 
      {
        let responseData = await serviceObject.getAllData(testService)
          setComponentData(responseData)
          console.log(responseData)
      }
  
      _getData ()
    }, [])

    return (

      <HomeContext.Provider value={componentData}>
          {children}
      </HomeContext.Provider>
      
    );

}