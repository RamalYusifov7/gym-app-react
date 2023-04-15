import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { globalApi } from "../api/globalAxios";
const GlobalContext = createContext()
const GlobalProvider = props => {

    const { isLoading: isExLoading, error: exError, data: exercises } = useQuery('exercise', () =>
        globalApi("/exercises").then((res) => res.data)
    );
    const [searchedExs, setSearchedExs] = useState([])
    
    useEffect(() => {
        setSearchedExs(exercises)
    }, [exercises])

    return (
        <GlobalContext.Provider value={{
            exercises,
            searchedExs,
            setSearchedExs,
            isExLoading,
            exError
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
export { GlobalContext, GlobalProvider }