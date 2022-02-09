import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="legend">
        <div className="box white">Няма връзка с везната</div>
        <div className="box yellow">Везната е свързана</div>
      </div>
      <div className="date_time">
        {new Date ().toDateString ()}
      </div>
    </footer>
  );
};

export default Footer;
