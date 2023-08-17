import { LinkedinFilled } from '@ant-design/icons';
import { Facebook, Instagram, Twitter } from '@icon-park/react';

import { home } from '~/modules/urls';

export const useFooterLink = () => {
  const FOOTER_LINK = [
    {
      title: 'Company',
      links: [
        {
          subtitle: 'About Us',
          url: home,
        },
        {
          subtitle: 'Contact Support',
          url: home,
        },
        {
          subtitle: 'Careers @ Jobstore',
          url: home,
        },
        {
          subtitle: 'Blog',
          url: home,
        },
        {
          subtitle: 'Partner Sites',
          url: home,
        },
        {
          subtitle: 'Fulfillment Policy',
          url: home,
        },
      ],
    },
    {
      title: 'JobSeeker',
      links: [
        {
          subtitle: 'Sign Up',
          url: home,
        },
        {
          subtitle: 'Sign In',
          url: home,
        },
        {
          subtitle: 'Check Application',
          url: home,
        },
        {
          subtitle: 'Jobseeker FAQs',
          url: home,
        },
        {
          subtitle: 'Browse Job',
          url: home,
        },
        {
          subtitle: 'Browse By Industry',
          url: home,
        },
      ],
    },
    {
      title: 'Employer',
      links: [
        {
          subtitle: 'Create Account',
          url: home,
        },
        {
          subtitle: 'Post Jobs',
          url: home,
        },
        {
          subtitle: 'Products & Prices',
          url: home,
        },
        {
          subtitle: 'Customer Support',
          url: home,
        },
        {
          subtitle: 'Contact Sales',
          url: home,
        },
      ],
    },
  ];
  return FOOTER_LINK;
};
export const SOCIAL_MEDIA = [
  {
    icon: <Facebook fill="#0F172A" theme="filled" />,
    url: 'https://www.facebook.com/MTPNMy/?locale=ms_MY',
    label: 'Facebook',
  },
  {
    icon: <Twitter fill="#0F172A" theme="filled" />,
    url: 'https://www.facebook.com/MTPNMy/?locale=ms_MY',
    label: 'Twitter',
  },
  {
    icon: <LinkedinFilled />,
    url: 'https://www.facebook.com/MTPNMy/?locale=ms_MY',
    label: 'LinkedIn',
  },
  {
    icon: <Instagram fill="#0F172A" theme="filled" />,
    url: 'https://www.facebook.com/MTPNMy/?locale=ms_MY',
    label: 'Instagram',
  },
];
