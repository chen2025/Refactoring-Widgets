import React, { useState } from 'react';

const Headers = ({ titles, currentTab, setCurrentTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    setCurrentTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

function Folder ({folders}){
  const [currentTab, setCurrentTab] = useState(0);

  const folder = folders[currentTab];
  const titles = folders.map((folder) => folder.title);

  return (
    <section className="tabs-section">
      <h1>Tabs</h1>
      <div className='tabs'>
        <Headers
          titles={titles}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className='tab-content'>
          {folder.content}
        </div>
      </div>
    </section>
  );
}

export default Folder;
