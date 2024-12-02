import { useState, useContext, createContext } from "react";

const FormContext = createContext() ;

const initialUsers = [
    { id: 1, name: 'Neeraj', roles: 'Admin', status: 'Active', permission: 'All' },
    { id: 2, name: 'Potter', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 3, name: 'Reetu', roles: 'Viewer', status: 'Active', permission: 'Read' },
    { id: 4, name: 'Rani', roles: 'Viewer', status: 'In Active', permission: 'Read' },
    { id: 5, name: 'Voldemort', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 6, name: 'Australia', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 7, name: 'Karina', roles: 'Viewer', status: 'Active', permission: 'Read' },
    { id: 8, name: 'Ritika', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 9, name: 'Pyari', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 10, name: 'Sinhaniya', roles: 'Viewer', status: 'Active', permission: 'Read' },
    { id: 11, name: 'Tinku', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 12, name: 'Raju', roles: 'Editor', status: 'Active', permission: 'Update' },
    { id: 13, name: 'Vikas', roles: 'Editor', status: 'In Active', permission: 'Update' },
    { id: 14, name: 'Neeraj', roles: 'Viewer', status: 'Active', permission: 'Read' },
    { id: 15, name: 'Radhe', roles: 'Editor', status: 'In Active', permission: 'Update' }
  
  ] ;


  function StateProvider({children}){
      const[data,setData] =useState(initialUsers) ;

      return(
          <FormContext.Provider
             value={{
               data,setData
             }}

          >
            {children}

          </FormContext.Provider>
      )
  }
  
  export function FormState(){
     return useContext(FormContext) ;
  }

  export default StateProvider ;
  

