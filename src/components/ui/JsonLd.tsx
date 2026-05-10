import { personalInfo } from '@/constants/data';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.role,
    "url": "https://your-portfolio-domain.com",
    "sameAs": [
      personalInfo.github,
      personalInfo.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
