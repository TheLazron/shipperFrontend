import { createContext, useState } from "react";

const TokenContext = createContext({});

export function TokenProvider(props) {
  const [token, setToken] = useState("default token value");

  const setTokenValue = (tokenValue) => {
    setToken(tokenValue);
  };

  
  // function setTokenValue(tokenValue){
  //   setToken(tokenValue)
  // }
  const value= {token, setTokenValue}

  return (
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
