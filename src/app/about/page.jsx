import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, ORDER_RULES, PRODUCTS } from '@/config/site'

export const metadata = {
  title: 'About Us',
  description: `Learn about ${SITE.name}, a ${SITE.foundingLocation}-based Breeze vape shop founded in ${SITE.foundingYear}.`,
  alternates: { canonical: `${SITE.url}/about/` },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    about: {
      '@type': 'Organization',
      name: SITE.name,
      foundingDate: String(SITE.foundingYear),
      foundingLocation: SITE.foundingLocation,
      description: SITE.description,
    },
  }

  return (
    <div className="container section" style={{ maxWidth: 820 }}>
      <Breadcrumbs items={[{ label: 'About', href: '/about/' }]} />
      <h1>About {SITE.name}</h1>

      <p>
        {SITE.name} is a {SITE.foundingLocation}-based vape retailer established in {SITE.foundingYear}, offering the
        full Breeze lineup — disposable vapes, pod systems, e-liquids, and accessories — to customers {SITE.shipsTo.toLowerCase()}.
        We built {SITE.name} around a simple idea: make it easy to find the exact Breeze product you want, order it
        quickly, and get it shipped discreetly and reliably.
      </p>

      <h2>What We Carry</h2>
      <p>
        Our catalog spans {PRODUCTS.length}+ Breeze products across disposables, pod systems, and e-liquids, organized
        by category and subcategory so you can go straight from flavor or puff count to checkout.
      </p>

      <h2>How We Ship</h2>
      <p>
        Every order ships {SITE.shipsTo.toLowerCase()}. Orders over ${ORDER_RULES.freeShippingOver} ship free; orders
        below that threshold carry a flat ${ORDER_RULES.flatShippingFee} shipping fee. The minimum order across the
        site is ${ORDER_RULES.minOrder}.
      </p>

      <h2>Payment</h2>
      <p>
        {SITE.name} accepts cryptocurrency payment (BTC, USDT). Paying with crypto applies an automatic{' '}
        {ORDER_RULES.cryptoDiscountPercent}% discount to your order total.
      </p>

      <h2>Age Restriction</h2>
      <p>
        {SITE.name} sells nicotine vaping products. All purchases require the buyer to be {SITE.ageRestriction} years
        of age or older. {SITE.complianceStatement}
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
