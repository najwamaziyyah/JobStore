import { Layout as AntdLayout, Button } from 'antd';
import JobStore from 'assets/jobStore.png';
import Image from 'next/image';
import Link from 'next/link';

import { useHeader } from './constant';
import { home } from '~/modules/urls';

const { Header: AntdHeader } = AntdLayout;

const HomeHeader = () => {
  const HOME_HEADER_LINKS = useHeader();

  return (
    <AntdHeader className="sticky top-0 z-40 h-auto w-full items-center border-b bg-white p-4 shadow lg:px-10">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 xl:px-10">
        <div>
          <Image
            alt="JobStore"
            className="block h-14 w-auto items-center p-1 md:h-10"
            src={JobStore}
          />
        </div>
        <div className="flex w-full max-w-xl items-center justify-between">
          {HOME_HEADER_LINKS.map(({ title }) => (
            <div key={title} className="font-semibold">
              {title}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link className="font-semibold text-black" href={home}>
            Sign In
          </Link>
          <Button className="border-[1px] border-[#000000] bg-[#ECE200] font-semibold">
            Employers
          </Button>
        </div>
      </div>
    </AntdHeader>
  );
};
export default HomeHeader;
