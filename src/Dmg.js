import React from "react";
import "./style.css";

import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";
import MetaTags from 'react-meta-tags';

export default () => {
  const url = window.document.location.href
  const thisPicture = document.querySelector("img")

  return (
    <div className="App">
      <MetaTags>
        <meta property="og:url" content={url} />
        <meta name="description" content="THIS IS A FREAKING DESCRIPTION" />
        <meta property="og:title" content="THIS IS A FREAKING TITLE!"/>
        <meta 
          property="og:image" content="https://dtw6acr6t1iop.cloudfront.net/image/cache/data/productimages/Figmas/DarkMagicianGirl_Rerelease/4545784066430.PT01-1000x1000.jpg" 
        />
      </MetaTags>

      <h1>This is an Amazing article</h1>
      <h2>
        First some text that will be on the site and then this will be followed
        by a picture
      </h2>
      <img
        className="dmg"
        src="https://dtw6acr6t1iop.cloudfront.net/image/cache/data/productimages/Figmas/DarkMagicianGirl_Rerelease/4545784066430.PT01-1000x1000.jpg"
        alt="Dark Magician Girl"
      />
{/* Method 1 */}
      <FacebookShareButton imageURL={thisPicture} url={url} hashtag="#OCbyNE">
        <FacebookIcon  borderRadius="20" size="50"/>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon borderRadius="20" size="50"/>
      </TwitterShareButton>
{/* Method 1 */}
    </div>
  );
}