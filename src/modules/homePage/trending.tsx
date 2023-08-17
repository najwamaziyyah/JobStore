import { Typography } from 'antd';
import arrow from 'assets/homepage2.png';
import mckilp from 'assets/homepage3.jpeg';
import Image from 'next/image';

const { Text, Title } = Typography;

const jobs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const TrendingJobs = () => (
  <div className="flex flex-col gap-10">
    <div className="flex justify-between">
      <Title>Trending Job</Title>
      <div className="flex items-center gap-3">
        <Text className="font-semibold text-[#0009DD]">
          Explore Vacancy Job
        </Text>
        <Image alt="Arrow" className="h-5 w-5" src={arrow} />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-6 ">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex min-h-[14rem] items-center  rounded-2xl p-8 shadow-2xl hover:bg-[#BADAFF]"
        >
          <div className="flex flex-col gap-4">
            <Text>Kuala Lumpur</Text>
            <Title className="font-montserrat">Sales Manager</Title>
            <Text className="text-[#0009DD]">
              Myr 10,000 - MYR 12,000 (Monthly)
            </Text>
            <div className="flex gap-2">
              <Text className="text-xs">MCKILP DEVELOPMENT SDN BHD</Text>
              <Image alt="MCKILP" className="h-5 w-16" src={mckilp} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrendingJobs;
