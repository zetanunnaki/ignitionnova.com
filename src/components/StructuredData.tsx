import siteData from "../../data/site.json";

type SchemaType =
  | "organization"
  | "website"
  | "service"
  | "article"
  | "faq"
  | "case-study"
  | "local-business"
  | "person"
  | "review"
  | "how-to"
  | "defined-term"
  | "speakable-article";

interface StructuredDataProps {
  type: SchemaType;
  data?: Record<string, unknown>;
}

function getSchema(type: SchemaType, data?: Record<string, unknown>) {
  const baseUrl = "https://www.ignitionnova.com";

  switch (type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Ignition Nova",
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        description: siteData.description,
        foundingDate: "2020",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 25,
        },
        knowsAbout: [
          "Generative Engine Optimization",
          "Technical SEO",
          "Core Web Vitals",
          "Web Development",
          "Conversion Rate Optimization",
          "AI Search Optimization",
          "E-E-A-T Optimization",
        ],
        brand: {
          "@type": "Brand",
          name: "Ignition Nova",
          slogan: "Elite Digital Marketing Agency",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteData.phone,
          contactType: "sales",
          email: siteData.email,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "785 15th Street, Office 478",
          addressLocality: "Berlin",
          addressCountry: "DE",
          postalCode: "81566",
        },
        sameAs: Object.values(siteData.social),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "87",
          bestRating: "5",
        },
      };

    case "website":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ignition Nova",
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };

    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.title,
        description: data?.description,
        provider: {
          "@type": "Organization",
          name: "Ignition Nova",
          url: baseUrl,
        },
        serviceType: "Digital Marketing",
        areaServed: "Worldwide",
        ...(data?.definition
          ? {
              termsOfService: data.definition,
            }
          : {}),
        ...(data?.slug ? { url: `${baseUrl}/services/${data.slug}` } : {}),
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.title,
        description: data?.description,
        author: {
          "@type": "Person",
          name: data?.authorName || "Ignition Nova Team",
          url: `${baseUrl}/about`,
          worksFor: {
            "@type": "Organization",
            name: "Ignition Nova",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Ignition Nova",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data?.date,
        dateModified: data?.modified || data?.date,
        ...(data?.slug
          ? { mainEntityOfPage: `${baseUrl}/insights/${data.slug}` }
          : {}),
      };

    case "speakable-article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.title,
        description: data?.description,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".article-summary", ".article-content h2", ".article-content p:first-of-type"],
        },
        author: {
          "@type": "Person",
          name: data?.authorName || "Ignition Nova Team",
          url: `${baseUrl}/about`,
          worksFor: {
            "@type": "Organization",
            name: "Ignition Nova",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Ignition Nova",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data?.date,
        dateModified: data?.modified || data?.date,
        ...(data?.slug
          ? { mainEntityOfPage: `${baseUrl}/insights/${data.slug}` }
          : {}),
      };

    case "faq":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (
          data?.questions as Array<{ q: string; a: string }>
        )?.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      };

    case "case-study":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.title,
        description: data?.excerpt,
        author: {
          "@type": "Organization",
          name: "Ignition Nova",
        },
        publisher: {
          "@type": "Organization",
          name: "Ignition Nova",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/logo.png`,
          },
        },
        ...(data?.slug
          ? { mainEntityOfPage: `${baseUrl}/work/${data.slug}` }
          : {}),
      };

    case "local-business":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ignition Nova",
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        image: `${baseUrl}/opengraph-image`,
        description: siteData.description,
        telephone: siteData.phone,
        email: siteData.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "785 15th Street, Office 478",
          addressLocality: "Berlin",
          addressCountry: "DE",
          postalCode: "81566",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "52.5200",
          longitude: "13.4050",
        },
        sameAs: Object.values(siteData.social),
        priceRange: "$$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "87",
          bestRating: "5",
        },
      };

    case "person":
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: data?.name,
        jobTitle: data?.role,
        description: data?.bio,
        knowsAbout: data?.specialties,
        hasCredential: (data?.credentials as string[])?.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: c,
        })),
        worksFor: {
          "@type": "Organization",
          name: "Ignition Nova",
          url: baseUrl,
        },
        sameAs: [data?.linkedin, data?.twitter].filter(
          (url) => url && url !== "#"
        ),
      };

    case "review":
      return {
        "@context": "https://schema.org",
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: data?.rating || 5,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: data?.name,
          jobTitle: data?.title,
        },
        reviewBody: data?.quote,
        datePublished: data?.datePublished,
        itemReviewed: {
          "@type": "Organization",
          name: "Ignition Nova",
          url: baseUrl,
        },
      };

    case "how-to":
      return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: data?.name,
        description: data?.description,
        step: (
          data?.steps as Array<{ name: string; text: string }>
        )?.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      };

    case "defined-term":
      return {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: data?.name,
        description: data?.description,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Digital Marketing Terminology",
        },
      };

    default:
      return null;
  }
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const schema = getSchema(type, data);
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
