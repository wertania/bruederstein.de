const SITE_URL = "https://bruederstein.de";

// Title, description, Open Graph and canonical URL for one page.
export const usePageSeo = (page: {
  title: string;
  description: string;
  path: string;
}) => {
  const url = SITE_URL + page.path;
  useSeoMeta({
    title: page.title,
    description: page.description,
    ogTitle: page.title,
    ogDescription: page.description,
    ogType: "website",
    ogUrl: url,
  });
  useHead({ link: [{ rel: "canonical", href: url }] });
};
