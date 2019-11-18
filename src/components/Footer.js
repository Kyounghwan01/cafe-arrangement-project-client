import React from 'react';
import '../assets/style/Main.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>
        <span>
          ⓒ 2019 make by Kyoung Hwan.  &nbsp;All Rights Reserved.
        </span>
        <a href='https://github.com/Kyounghwan01'>
          <img
            alt='github'
            className='github'
            src='https://cdn.icon-icons.com/icons2/1488/PNG/512/5347-github_102542.png'
          ></img>
        </a>
        <a href='http://blog.knowgari.com/'>
          <img
            alt='blog'
            className='blog'
            src='https://cdn.icon-icons.com/icons2/1488/PNG/512/5347-github_102542.png'
          ></img>
        </a>
      </div>
    </div>
  );
};
export default Footer;
