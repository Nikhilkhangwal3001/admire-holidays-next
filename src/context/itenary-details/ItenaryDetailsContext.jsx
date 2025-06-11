import {createContext,useContext} from "react";

export const ItenaryDetailsContext = createContext();

export const ItenaryDetailContextProvider = ({itenaryDetails,setItenaryDetails,children}) => {
    return (
        <ItenaryDetailsContext.Provider value={{itenaryDetails,setItenaryDetails}} >
            {children}
        </ItenaryDetailsContext.Provider>
    )
}

export const useItenaryContext = () => {
    const context = useContext(ItenaryDetailsContext);
    if(!context){
        throw new Error('Itenary Context Not Found');
    }
    return context;
}