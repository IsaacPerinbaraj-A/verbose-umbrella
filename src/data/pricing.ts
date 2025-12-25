export interface PricingFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups getting started.',
    price: '$999',
    period: 'per month',
    features: [
      'Up to 5 team members',
      'Basic web application',
      'Standard hosting',
      'Email support',
      'Monthly updates',
      'SSL certificate',
      'Basic analytics',
      'Mobile responsive design'
    ],
    cta: 'Get Started',
    ctaLink: '/contact'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with advanced requirements.',
    price: '$2,999',
    period: 'per month',
    popular: true,
    features: [
      'Up to 20 team members',
      'Custom web application',
      'Premium hosting',
      'Priority support (24/7)',
      'Weekly updates',
      'Advanced security',
      'Advanced analytics',
      'API integrations',
      'Custom integrations',
      'Performance optimization',
      'SEO optimization'
    ],
    cta: 'Get Started',
    ctaLink: '/contact'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with complex needs and scale requirements.',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited team members',
      'Enterprise-grade applications',
      'Dedicated infrastructure',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom SLA',
      'Advanced integrations',
      'White-label solutions',
      'Custom development',
      'Training & onboarding',
      'Compliance & security audits',
      'Scalable architecture'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact'
  }
];

export const pricingFeatures: PricingFeature[] = [
  {
    name: 'Team Members',
    starter: 'Up to 5',
    professional: 'Up to 20',
    enterprise: 'Unlimited'
  },
  {
    name: 'Hosting',
    starter: 'Standard',
    professional: 'Premium',
    enterprise: 'Dedicated'
  },
  {
    name: 'Support',
    starter: 'Email',
    professional: '24/7 Priority',
    enterprise: '24/7 Dedicated'
  },
  {
    name: 'Updates',
    starter: 'Monthly',
    professional: 'Weekly',
    enterprise: 'As needed'
  },
  {
    name: 'Integrations',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Custom'
  },
  {
    name: 'Security',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Enterprise-grade'
  },
  {
    name: 'Analytics',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: true
  },
  {
    name: 'Custom Development',
    starter: false,
    professional: 'Limited',
    enterprise: true
  },
  {
    name: 'SLA',
    starter: 'Standard',
    professional: 'Standard',
    enterprise: 'Custom'
  },
  {
    name: 'Account Manager',
    starter: false,
    professional: false,
    enterprise: true
  }
];

