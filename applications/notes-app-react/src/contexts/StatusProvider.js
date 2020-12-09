import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export default function StatusProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentError, setCurrentError] = useState(null);

  const updateLoadingStatus = (loadingStatus) => {
    setIsLoading(loadingStatus);
  };

  const updateError = (error) => {
    setCurrentError(error);
  };

  const clearError = () => {
    setCurrentError(null);
  };

  return (
    <StatusContext.Provider
      value={{
        isLoading,
        updateLoadingStatus,
        error: currentError,
        updateError,
        clearError,
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
}
