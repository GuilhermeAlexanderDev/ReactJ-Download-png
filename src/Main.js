import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Main() {
  const [image, setImage] = useState(
    'https://cdn-icons-png.flaticon.com/512/29/29072.png'
  );

  const download = (e) => {
    e.preventDefault();
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png'); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="center">
      <h1>Download PNG</h1>
      <form action="">
        <input
          type="text"
          className="ImgLink"
          placeholder="Link Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          className="btnReset"
          onClick={(e) => {
            e.preventDefault(), setImage('');
          }}
        >
          Reset
        </button>
      </form>

      <img target="_blank" className="ImageMain" src={image} alt="previw" />

      <a
        className="button-download"
        href={image}
        download
        onClick={(e) => download(e)}
      >
        download
      </a>

      {/* <a href='#' download>
        <img className="ImageMain" src={image} alt="" />
      </a>
       */}

      <br />
    </div>
  );
}
