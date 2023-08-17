import { Typography } from 'antd';
import arrow from 'assets/homepage2.png';
import homePage5 from 'assets/homepage5.png';
import homePage4 from 'assets/hompage4.png';
import Image from 'next/image';

const { Text, Title } = Typography;

const Jobs = [{ id: 1 }, { id: 2 }, { id: 3 }];
const Popular = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const PopularSearch = () => (
  <div className="flex flex-col gap-10">
    <Title>Popular Searches</Title>
    <div className="grid grid-cols-3 gap-16">
      <div className="col-span-2">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <Title className="text-[#0009DD]">categories</Title>
            <div className="flex items-center gap-3">
              <Text className="font-semibold text-[#0009DD]">
                Explore Vacancy Job
              </Text>
              <Image alt="Arrow" className="h-5 w-5" src={arrow} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 ">
            {Jobs.map((job) => (
              <div
                key={job.id}
                className="flex min-h-[24rem] rounded-2xl p-2 shadow-2xl hover:bg-[#BADAFF]"
              >
                <div className="grid grid-flow-row">
                  <Image alt="HomePage4" className="h-full" src={homePage4} />
                  <div className="flex place-items-center justify-center">
                    <Text className="flex text-center text-2xl font-semibold">
                      Sales / Marketing Jobs
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Title className="text-[#0009DD]">Location</Title>
        <div className="flex flex-col gap-6">
          {Popular.map((job) => (
            <div
              key={job.id}
              className="flex min-h-[5rem] items-center justify-center rounded-md p-2 shadow-lg hover:bg-[#BADAFF]"
            >
              <div className="flex items-center gap-5">
                <Image alt="HomePage4" className="h-5 w-5" src={homePage5} />
                <Text className="font-semibold">Kuala Lumpur</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PopularSearch;
