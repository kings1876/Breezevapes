(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'browse_products',
        description: 'Browse products by category',
        inputSchema: { type: 'object', properties: { category: { type: 'string', description: 'Product category to browse' } } },
        execute: async ({ category }) => {
          const url = category ? 'https://www.breezevapes.net/shop/' + category + '/' : 'https://www.breezevapes.net/shop/';
          window.location.href = url;
          return { url };
        }
      },
      {
        name: 'contact',
        description: 'Contact for product questions or support',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => {
          window.location.href = 'https://www.breezevapes.net/contact/';
          return { url: 'https://www.breezevapes.net/contact/' };
        }
      }
    ]
  });
})();
