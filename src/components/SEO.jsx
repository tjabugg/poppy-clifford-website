import React from "react";
import { Helmet } from "react-helmet-async";

// Destructure blogs and title directly from the props

const MetaTags = ({ title, description, name, type }) => {
  return (
    <div>
      {metaTags.map((metaTag) => (
        <Helmet>
          {/* Standard metadata tags */}
          <title>{metaTag.title}</title>
          <meta name="description" content={description} />
          {/* End standard metadata tags */}
          {/* Facebook tags */}
          <meta property="og:type" content={type} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          <meta name="twitter:creator" content={name} />
          <meta name="twitter:card" content={type} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* End Twitter tags */}
        </Helmet>
      ))}
    </div>
  );
};

export default MetaTags;
