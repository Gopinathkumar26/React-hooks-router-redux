import React from 'react';
import { UserContext } from './ContextApp';
import { ChannelContext } from './ContextApp';

//Component with createContext Provider and Consumer

function ComponentF() {
  return (
        // <div>
        //     <UserContext.Consumer>
        //         {user => {
        //             return (
        //                 <div>
        //                 {user}
        //             </div>
        //             )
        //         }}
        //     </UserContext.Consumer>
        // </div>

    <div>
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                       {Channel => {
                        return (
                            <div>
                                {user}, {Channel}
                            </div>
                        )
                       }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF