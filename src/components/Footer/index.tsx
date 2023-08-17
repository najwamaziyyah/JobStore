import { Layout as AntdLayout, Typography } from 'antd';
import Jobstore from 'assets/jobStore.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { useFooterLink, SOCIAL_MEDIA } from './constant';

const { Footer: AntdFooter } = AntdLayout;
const { Text, Title } = Typography;

const Footer = () => {
  const { t } = useTranslation('footer');
  const FOOTER_LINK = useFooterLink();
  return (
    <AntdFooter className="border-t-[1px] border-[#455A64] bg-[#FAFAFA] px-4 lg:px-10">
      <div className="mx-auto max-w-screen-2xl lg:py-24">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Image alt="JobStore" className="flex h-16 w-40" src={Jobstore} />
          {FOOTER_LINK.map(({ links, title }) => {
            const linkContent = links.map(({ subtitle, url }) => (
              <Link
                key={url}
                className="font-montserrat text-base font-normal text-black"
                href={url}
              >
                {subtitle}
              </Link>
            ));

            return (
              <div
                key={title}
                className="flex flex-col gap-3 font-roboto text-xl font-bold text-[#0009DD]"
              >
                {title}
                {linkContent}
              </div>
            );
          })}

          <div className="flex flex-col gap-3">
            <Title className="font-roboto text-xl font-bold text-[#0009DD]">
              {t('followMe')}
            </Title>
            <div className="flex flex-col gap-3">
              {SOCIAL_MEDIA.map(({ icon, label, url }) => (
                <Link key={url} href={url}>
                  <div className="flex gap-4">
                    {icon}
                    <div className="text-base text-black">{label}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Text className="text-base">Call us at +603 2716 5199</Text>
            <Text className="text-base">Send us a message</Text>
          </div>
        </div>
      </div>
    </AntdFooter>
  );
};

export default Footer;
