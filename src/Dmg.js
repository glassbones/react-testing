import React from "react";
import "./style.css";

import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";
import Helmet from 'react-helmet'

export default () => {
  const url = window.document.location.href
  const thisPicture = document.querySelector("img")

  return (
    <>
     <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Reed</title>
        <meta
          name="description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta name="description" content="THIS IS A FREAKING DESCRIPTION" />
        <meta property="og:title" content="THIS IS A FREAKING TITLE!"/>
        <meta 
            property="og:image" content="https://dtw6acr6t1iop.cloudfront.net/image/cache/data/productimages/Figmas/DarkMagicianGirl_Rerelease/4545784066430.PT01-1000x1000.jpg" 
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reed" />
        <meta
          name="twitter:description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta 
            property="og:image" content="https://dtw6acr6t1iop.cloudfront.net/image/cache/data/productimages/Figmas/DarkMagicianGirl_Rerelease/4545784066430.PT01-1000x1000.jpg" 
        />
      </Helmet>
    
      <div className="App">
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
    </>
  );
}