import { Typography, Input, Space, Button } from 'antd';
import homepage from 'assets/homepage1.png';
import Image from 'next/image';

const { Text, Title } = Typography;

const HomePage = () => (
  <div className="mx-auto max-w-screen-2xl">
    <div className="grid grid-cols-3 items-center">
      <div className="col-span-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <Title className="text-7xl font-bold">Find Your</Title>
              <Title className="text-7xl font-bold text-[#0009DD]">
                Dream Job
              </Title>
            </div>
            <Text className=" text-2xl font-semibold text-[#9B9FAB]">
              Get Job In Your Dream Company
            </Text>
          </div>
          <div className="flex">
            <Space.Compact>
              <Input
                placeholder="Job title or keyword"
                style={{ width: '50%' }}
              />
              <Input placeholder="Location or City" style={{ width: '50%' }} />
              <Button className="rounded-md bg-[#0009DD] font-medium text-white">
                Search
              </Button>
            </Space.Compact>
          </div>
        </div>
      </div>
      <div>
        <Image alt="homepage" className="w-auto" src={homepage} />
      </div>
    </div>
  </div>
);

export default HomePage;
