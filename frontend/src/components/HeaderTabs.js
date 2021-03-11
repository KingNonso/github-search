import React, { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const HeaderTabs = ({ children }) => {
  const [key, setKey] = useState('js');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="js" title="Javascript">
         <p>This is a Tab screen for JS</p>
        { children }
      </Tab>
      <Tab eventKey="css" title="CSS">
         <p>This is a Tab screen for css</p>
      </Tab>
      <Tab eventKey="html" title="HTML">
         <p>This is a Tab screen for html</p>
      </Tab>
    </Tabs>
  );
}

export default HeaderTabs;


