export default function sitemap() {
  return [
    {
      url: "https://bookswyft.com/",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];
}
