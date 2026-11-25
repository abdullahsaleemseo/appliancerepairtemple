import type { MetadataRoute } from 'next';
import { indexingAllowed, site } from '@/config/site';

export const dynamic = 'force-static';

/**
 * Search and AI crawlers named explicitly so the policy is clear in the file. All are allowed once
 * indexing is switched on: search engines, AI search and answer engines, and AI training crawlers.
 * To opt out of AI training only, move the training bots (GPTBot, ClaudeBot, CCBot, Google-Extended,
 * Applebot-Extended, meta-externalagent) into a disallow rule.
 */
export const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'Amazonbot',
  'meta-externalagent',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
];

/**
 * With indexing off, crawling stays open so search engines can read the noindex tag and header on
 * every page and drop pages that were already indexed. Blocking crawling would hide the noindex.
 */
export default function robots(): MetadataRoute.Robots {
  if (!indexingAllowed) {
    return { rules: [{ userAgent: '*', allow: '/' }] };
  }
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: aiCrawlers, allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
