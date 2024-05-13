import { GoCheckCircle } from 'react-icons/go';

import { Button } from '@/components/button/button';
import { Header, HeaderText, SubHeader } from '@/components/header';
import { IconLabel } from '@/components/icon-label';
import Image from 'next/image';
import { MdOutlineCreditCardOff } from 'react-icons/md';
import { RiCoupon2Line } from 'react-icons/ri';
import { TbCircleArrowUpRight } from 'react-icons/tb';

export default function Page1() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center gap-5 bg-light min-h-dvh">
        <div className="pt-32">
          <Header alignment="center">
            <HeaderText
              size="text-6xl"
              color="text-accent-400"
              coloredWords={['business']}
              accentColor="text-primary-600"
            >
              Business Growth
            </HeaderText>
            <HeaderText
              size="text-6xl"
              color="text-accent-400"
              coloredWords={['business']}
              accentColor="text-primary-600"
            >
              Simplified
            </HeaderText>
            <SubHeader color="text-accent-200" size="text-base">
              An integrated tool for Sales, Marketing, Customer  Service &
              Operation that helps your business grow.
            </SubHeader>
          </Header>
        </div>
        <Button
          label="Start trial"
          variant="white"
          rightIcon={<TbCircleArrowUpRight className="font-semibold text-xl" />}
        />

        <div className="md:flex xs:flex-col xs:justify-start md:gap-5 xs:gap-2">
          <IconLabel
            leftIcon={<GoCheckCircle className="text-primary-600 text-xl" />}
            label="3-Day Free Trial"
          />
          <IconLabel
            leftIcon={
              <MdOutlineCreditCardOff className="text-primary-600 text-xl" />
            }
            label="No Credit Card"
          />
          <IconLabel
            leftIcon={<RiCoupon2Line className="text-primary-600 text-xl" />}
            label="Cancel Anytime"
          />
        </div>
        <div className="top-3/4 z-10 mt-10 transform">
          <Image
            className="w-full"
            src={'/asset/roboket-dashboard.svg'}
            width={900}
            height={300}
            alt="Hero Image"
          />
        </div>
      </div>
    </>
  );
}
