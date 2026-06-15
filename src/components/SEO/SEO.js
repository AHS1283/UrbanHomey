import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords, url, image }) {
  return (
    <Helmet>
      {/* ── BASIC ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="UrbanHomey" />

      {/* ── OPEN GRAPH (Facebook / WhatsApp) ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UrbanHomey" />

      {/* ── TWITTER CARD ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── CANONICAL ── */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
