//  ContextApp ---> Com A
//             ---> Com B  ---> Com D
//             ---> Com C  ---> Com E ---> Com F  

import React, {createContext} from 'react';
import ComponentC from './ComponentC';

//Component with createContext Provider and Consumer
                              
export const UserContext = createContext()
export const ChannelContext = createContext()

function ContextApp() {                            
  return (    
        // <div>
        //     <UserContext.Provider value={'Gopinath'}>
        //         <ComponentC/>
        //     </UserContext.Provider>
        // </div>   

    <div>
        <UserContext.Provider value={'Gopinath'}>
            <ChannelContext.Provider value={'Mechanical Engineer'}>
               <ComponentC/> 
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>                            
  )
}

export default ContextApp