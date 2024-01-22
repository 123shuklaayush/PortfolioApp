import PropTypes from "prop-types"
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({children}) {
  const [activeSideBar, setActiveSideBar] = useState(false);
  const state = {
    activeSideBar,
    setActiveSideBar,
  }
  return ( 
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


export default AppProvider;