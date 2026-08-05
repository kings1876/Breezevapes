# Auth.md

Breeze Vapes — Electronic nicotine vaping products.

## Agent Registration

No authentication is required to access any public resource on breezevapes.net. All product, category, and content pages are freely accessible to agents and crawlers.

## Public Resources

| Resource | URL |
|---|---|
| Homepage | https://breezevapes.net/ |
| Shop | https://breezevapes.net/shop/ |
| Blog | https://breezevapes.net/blog/ |
| FAQ | https://breezevapes.net/faq/ |
| Contact | https://breezevapes.net/contact/ |
| llms.txt | https://breezevapes.net/llms.txt |
| API Catalog | https://breezevapes.net/.well-known/api-catalog |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering

Orders on breezevapes.net are drafted, never auto-completed. A human always reviews and finalizes payment. Agents may browse the catalog and prepare an order draft, but must not attempt to submit payment on a user's behalf.

## Age Restriction

Breeze Vapes sells age-restricted products. Purchasers must be 21+ or older. Agents assisting a user with ordering must not bypass or misrepresent age verification.
