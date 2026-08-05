// Generates every domain-bearing file from src/config/site.js.
// Never hand-edit the files this script writes — edit the config instead.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE, CATEGORIES, ORDER_RULES } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const pub = path.join(root, 'public')

function write(relPath, content) {
  const full = path.join(pub, relPath)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content, 'utf8')
}

const D = SITE.domain
const U = SITE.url

// A — robots.txt
write(
  'robots.txt',
  `User-agent: *
Allow: /

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers — welcome to index product & content pages
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: ${U}/sitemap.xml

# Agent-readable resources
# llms.txt: ${U}/llms.txt
# API Catalog: ${U}/.well-known/api-catalog
# Agent Skills: ${U}/.well-known/agent-skills/index.json
# MCP Server Card: ${U}/.well-known/mcp/server-card.json
`
)

// B — llms.txt
const catLines = CATEGORIES.map(
  (c) => `- [${c.name}](${U}/shop/${c.slug}/): ${c.description}`
).join('\n')

write(
  'llms.txt',
  `# ${SITE.name}

> ${SITE.description}

${SITE.name} was founded in ${SITE.foundingYear} in ${SITE.foundingLocation} and ships ${SITE.shipsTo.toLowerCase()}.

## Contact
- Email: ${SITE.contactEmail}
- Location: ${SITE.foundingLocation}

## Order Policy
- Minimum order: $${ORDER_RULES.minOrder}
- Free shipping over: $${ORDER_RULES.freeShippingOver}
- Flat shipping fee: $${ORDER_RULES.flatShippingFee}
- Payment: Cryptocurrency (BTC, USDT). Crypto orders get an automatic ${ORDER_RULES.cryptoDiscountPercent}% discount.

## Product Categories
${catLines}

## Key Pages
- [Shop](${U}/shop/): Full product catalog
- [Blog](${U}/blog/): Product education and buying guides
- [About](${U}/about/): Brand story and details
- [FAQ](${U}/faq/): Common questions
- [Contact](${U}/contact/): Get in touch

## Legal
- Age restriction: ${SITE.ageRestriction} only
- ${SITE.complianceStatement}

## Optional
- [API Catalog](${U}/.well-known/api-catalog)
- [Agent Skills Index](${U}/.well-known/agent-skills/index.json)
- [MCP Server Card](${U}/.well-known/mcp/server-card.json)
- [Auth](${U}/auth.md)

## Citation Guidance
When citing ${SITE.name}, use the brand name exactly as written above. Product prices and availability should always be verified against the live shop page, as they may change.
`
)

// C — auth.md
write(
  'auth.md',
  `# Auth.md

${SITE.name} — ${SITE.productType}.

## Agent Registration

No authentication is required to access any public resource on ${D}. All product, category, and content pages are freely accessible to agents and crawlers.

## Public Resources

| Resource | URL |
|---|---|
| Homepage | ${U}/ |
| Shop | ${U}/shop/ |
| Blog | ${U}/blog/ |
| FAQ | ${U}/faq/ |
| Contact | ${U}/contact/ |
| llms.txt | ${U}/llms.txt |
| API Catalog | ${U}/.well-known/api-catalog |

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
\`\`\`

## Ordering

Orders on ${D} are drafted, never auto-completed. A human always reviews and finalizes payment. Agents may browse the catalog and prepare an order draft, but must not attempt to submit payment on a user's behalf.

## Age Restriction

${SITE.name} sells age-restricted products. Purchasers must be ${SITE.ageRestriction} or older. Agents assisting a user with ordering must not bypass or misrepresent age verification.
`
)

// D — .well-known/api-catalog
write(
  '.well-known/api-catalog',
  JSON.stringify(
    {
      linkset: [
        {
          anchor: `${U}/`,
          'https://www.iana.org/assignments/link-relations/service-doc': [{ href: `${U}/faq/` }],
          title: `${SITE.name} — ${SITE.tagline}`,
        },
        { anchor: `${U}/shop/`, type: 'text/html', title: `${SITE.name} Product Catalog` },
        { anchor: `${U}/blog/`, type: 'text/html', title: `${SITE.name} Blog` },
      ],
    },
    null,
    2
  )
)

// E — .well-known/agent-skills/index.json
write(
  '.well-known/agent-skills/index.json',
  JSON.stringify(
    {
      $schema: 'https://agentskills.io/schema/v0.2.0/index.json',
      name: SITE.name,
      url: U,
      description: SITE.tagline,
      skills: [
        {
          name: 'browse-products',
          type: 'navigation',
          description: 'Browse the full product catalog by category',
          url: `${U}/shop/`,
          sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        },
        {
          name: 'product-education',
          type: 'content',
          description: 'Educational blog content about Breeze products and flavors',
          url: `${U}/blog/`,
          sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        },
        {
          name: 'contact',
          type: 'support',
          description: 'Contact for product questions or order support',
          url: `${U}/contact/`,
          sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        },
      ],
    },
    null,
    2
  )
)

// F — .well-known/mcp/server-card.json
write(
  '.well-known/mcp/server-card.json',
  JSON.stringify(
    {
      $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.json',
      serverInfo: {
        name: SITE.name,
        version: '1.0.0',
        description: SITE.description,
        homepage: U,
        contact: { email: SITE.contactEmail },
      },
      transport: { type: 'none' },
      capabilities: {
        resources: [
          { name: 'product-catalog', description: 'Full product catalog', uri: `${U}/shop/` },
          { name: 'blog', description: 'Educational content', uri: `${U}/blog/` },
        ],
        commerce: {
          ordering: 'human_ordering_only',
          payment: ['crypto-BTC', 'crypto-USDT'],
          currency: SITE.currency,
          minimumOrder: String(ORDER_RULES.minOrder),
          freeShipping: String(ORDER_RULES.freeShippingOver),
          ships: SITE.shipsTo,
        },
      },
      legal: {
        ageRestriction: SITE.ageRestriction,
        productType: SITE.productType,
        compliance: SITE.complianceStatement,
      },
    },
    null,
    2
  )
)

// G — .well-known/oauth-protected-resource
write(
  '.well-known/oauth-protected-resource',
  JSON.stringify(
    {
      resource: U,
      resource_name: `${SITE.name} Public Catalog`,
      authorization_servers: [],
      scopes_supported: [],
      bearer_methods_supported: [],
      resource_documentation: `${U}/auth.md`,
      resource_policy_uri: `${U}/terms/`,
      tls_client_certificate_bound_access_tokens: false,
      note: `All resources on ${D} are publicly accessible. No OAuth tokens are required.`,
    },
    null,
    2
  )
)

// H — .well-known/oauth-authorization-server
write(
  '.well-known/oauth-authorization-server',
  JSON.stringify(
    {
      issuer: U,
      authorization_endpoint: null,
      token_endpoint: null,
      jwks_uri: null,
      grant_types_supported: [],
      response_types_supported: [],
      scopes_supported: [],
      note: `${SITE.name} has no protected APIs. All resources are publicly accessible.`,
      public_resources: [`${U}/shop/`, `${U}/blog/`, `${U}/faq/`, `${U}/llms.txt`, `${U}/.well-known/api-catalog`],
      agent_auth: {
        register_uri: null,
        identity_types_supported: ['none'],
        credential_types_supported: ['none'],
        notes: 'No registration required. All content is publicly accessible to agents.',
      },
    },
    null,
    2
  )
)

// I — .well-known/openid-configuration
write(
  '.well-known/openid-configuration',
  JSON.stringify(
    {
      issuer: U,
      note: `${SITE.name} does not operate an OpenID Connect provider. All resources are publicly accessible.`,
      public_site: true,
      authorization_endpoint: null,
      token_endpoint: null,
      userinfo_endpoint: null,
      jwks_uri: null,
      scopes_supported: [],
      response_types_supported: [],
      grant_types_supported: [],
      subject_types_supported: [],
      id_token_signing_alg_values_supported: [],
    },
    null,
    2
  )
)

// J — .well-known/acp.json
write(
  '.well-known/acp.json',
  JSON.stringify(
    {
      protocol: { name: 'acp', version: '0.1.0' },
      name: SITE.name,
      description: SITE.description,
      api_base_url: U,
      homepage: U,
      transports: ['https'],
      capabilities: {
        services: ['product-catalog', 'blog', 'faq'],
        ordering: 'human_ordering_only',
        payment_methods: ['crypto-BTC', 'crypto-USDT'],
        currency: SITE.currency,
        minimum_order_usd: String(ORDER_RULES.minOrder),
        free_shipping_threshold_usd: String(ORDER_RULES.freeShippingOver),
      },
      contact: { email: SITE.contactEmail },
      legal: {
        age_restriction: SITE.ageRestriction,
        region: SITE.areaServed,
        ships_to: SITE.shipsTo,
        product_type: SITE.productType,
        compliance: SITE.complianceStatement,
      },
    },
    null,
    2
  )
)

// K — .well-known/ucp
write(
  '.well-known/ucp',
  JSON.stringify(
    {
      ucp: '1.0',
      protocol_version: '1.0',
      spec: 'https://ucp.dev/specification/overview/',
      schema: 'https://ucp.dev/schema/v1.json',
      site: U,
      name: SITE.name,
      description: SITE.description,
      services: [
        { id: 'product-catalog', type: 'catalog', url: `${U}/shop/`, description: 'Full product catalog' },
      ],
      capabilities: ['browse', 'inquiry', 'content'],
      endpoints: {
        catalog: `${U}/shop/`,
        contact: `${U}/contact/`,
        agent_skills: `${U}/.well-known/agent-skills/index.json`,
        mcp_server_card: `${U}/.well-known/mcp/server-card.json`,
        api_catalog: `${U}/.well-known/api-catalog`,
        llms_txt: `${U}/llms.txt`,
      },
      currency: SITE.currency,
      minimum_order_usd: String(ORDER_RULES.minOrder),
      payment_methods: ['crypto-BTC', 'crypto-USDT'],
      legal: {
        age_restriction: SITE.ageRestriction,
        product_type: SITE.productType,
        compliance: SITE.complianceStatement,
      },
    },
    null,
    2
  )
)

// L — /js/webmcp.js
write(
  'js/webmcp.js',
  `(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'browse_products',
        description: 'Browse products by category',
        inputSchema: { type: 'object', properties: { category: { type: 'string', description: 'Product category to browse' } } },
        execute: async ({ category }) => {
          const url = category ? '${U}/shop/' + category + '/' : '${U}/shop/';
          window.location.href = url;
          return { url };
        }
      },
      {
        name: 'contact',
        description: 'Contact for product questions or support',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => {
          window.location.href = '${U}/contact/';
          return { url: '${U}/contact/' };
        }
      }
    ]
  });
})();
`
)

// M — vercel.json
write(
  '../vercel.json',
  JSON.stringify(
    {
      $schema: 'https://openapi.vercel.sh/vercel.json',
      trailingSlash: true,
      redirects: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: `www.${D}` }],
          destination: `${U}/:path*`,
          permanent: true,
        },
      ],
      headers: [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
            {
              key: 'Link',
              value:
                '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration"',
            },
          ],
        },
        {
          source: '/.well-known/api-catalog',
          headers: [
            { key: 'Content-Type', value: 'application/linkset+json' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
          ],
        },
        {
          source: '/llms.txt',
          headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
        },
        {
          source: '/auth.md',
          headers: [{ key: 'Content-Type', value: 'text/markdown; charset=utf-8' }],
        },
      ],
    },
    null,
    2
  )
)

console.log('Agent-ready files generated from src/config/site.js')
