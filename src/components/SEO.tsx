import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Aestraa - Premium Creative Studio | Art Workshops & Commissions',
  description = 'Aestraa is a premium creative studio in Hyderabad specializing in art workshops, commissioned artworks, and art consultancy for institutions and individuals.',
  keywords = 'art studio hyderabad, art workshops, commissioned art, art consultancy, painting workshops, creative studio, aestraa',
  image = '/logo.jpg',
  url = 'https://aestraa.com',
  type = 'website',
}) => {
  const siteTitle = title.includes('Aestraa') ? title : `${title} | Aestraa`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="ENTER_YOUR_CODE_HERE" />
    </Helmet>
  );
};

export default SEO;
