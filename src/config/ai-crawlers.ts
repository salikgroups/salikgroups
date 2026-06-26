/**
 * Known AI / LLM / answer-engine crawlers.
 * Explicitly allowed in robots.txt so GPT, Gemini, Claude, Perplexity, etc. can index the site.
 */
export const aiCrawlerUserAgents = [
  // OpenAI / ChatGPT
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Google / Gemini
  "Google-Extended",
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "Google-InspectionTool",
  "Storebot-Google",
  // Anthropic / Claude
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "claude-web",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Microsoft / Copilot
  "Bingbot",
  "BingPreview",
  "msnbot",
  // Meta
  "FacebookBot",
  "meta-externalagent",
  "Meta-ExternalFetcher",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // ByteDance
  "Bytespider",
  // Common Crawl (used by many AI datasets)
  "CCBot",
  // Cohere
  "cohere-ai",
  // You.com
  "YouBot",
  // Amazon
  "Amazonbot",
  // DuckDuckGo
  "DuckDuckBot",
  // Diffbot
  "Diffbot",
  // Other research / AI crawlers
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
  "Timpibot",
  "Webzio-Extended",
  "AI2Bot",
  "FriendlyCrawler",
  "img2dataset",
  "Scrapy",
] as const;

export const aiDiscoveryPaths = {
  llmsTxt: "/llms.txt",
  llmsFullTxt: "/llms-full.txt",
  aiTxt: "/ai.txt",
  mainSitemap: "/sitemap.xml",
  seoSitemapIndex: "/seo-sitemap-index.xml",
  robots: "/robots.txt",
} as const;
