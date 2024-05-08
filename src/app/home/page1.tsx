import { Button } from '@/components/button/button';
import { Header, HeaderText, SubHeader } from '@/components/header';
import { IconLabel } from '@/components/icon-label';
import { GoCheckCircle } from 'react-icons/go';
import { TbCircleArrowUpRight } from 'react-icons/tb';

export default function Page1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-light min-h-dvh">
        <Header alignment="center">
          <HeaderText
            size="text-6xl"
            color="text-accent-400"
            coloredWords={['business']}
            accentColor="text-primary-600"
          >
            Business Growth Simplified
          </HeaderText>
          <SubHeader color="text-accent-200" size="text-base">
            An integrated tool for Sales, Marketing, Customer  Service &
            Operation that helps your business grow.
          </SubHeader>
        </Header>
        <Button
          label="Start trial"
          variant="white"
          rightIcon={<TbCircleArrowUpRight className="font-semibold text-xl" />}
        />

        {/*  */}
        <div className="flex gap-2 my-5">
          <Button label="Button 4" size="small" variant="light" outline />
          <Button label="Button 5" size="medium" variant="secondary" />
          <Button label="Button 6" size="large" variant="accent" />
          <Button label="Button 7" size="small" variant="primary" outline />
        </div>
        <div>
          <IconLabel
            leftIcon={<GoCheckCircle className="text-primary-600" />}
            label={'This is new addition'}
            fontSize="text-sm"
            color="text-primary-600"
          />
        </div>
      </div>
    </>
  );
}
