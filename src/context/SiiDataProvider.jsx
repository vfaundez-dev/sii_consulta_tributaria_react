import { useConsolidateData } from "../hooks/useConsolidateData";
import { SiiDataContext } from "./SiiDataContext.js";

export const SiiDataProvider = ({ children }) => {

  const { siiData, getConsolidateData, clearData, loading, error } = useConsolidateData();

  return (
    <SiiDataContext.Provider
      value={{
        siiData,
        getConsolidateData,
        clearData,
        loading,
        error
      }}
    >
      { children }
    </SiiDataContext.Provider>
  )
}
