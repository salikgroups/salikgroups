export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSection = {
  title: string;
  paragraphs: string[];
};

export type SeoRelatedLink = {
  label: string;
  href: string;
};

export type SeoLandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  subheadline: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
  relatedLinks: SeoRelatedLink[];
  ogImage?: string;
};

export type SeoExtension = {
  title: string;
  intro: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
};
