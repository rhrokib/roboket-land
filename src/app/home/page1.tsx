import { Button } from '@/components/button/button';
import {
  Header,
  HeaderText,
  HeaderTitle,
  SubHeader,
} from '@/components/header';
import { IconLabel } from '@/components/icon-label';
import { GoCheckCircle } from 'react-icons/go';

export default function Page1() {
  return (
    <div className="flex flex-col justify-center items-center bg-light min-h-screen">
      <Header alignment="left">
        <HeaderTitle size="text-sm">This is a title</HeaderTitle>
        <HeaderText
          size="text-2xl"
          coloredWords={['colored']}
          accentColor="text-primary-600"
        >
          A big header with some Colored words
        </HeaderText>
        <SubHeader size="text-base">
          This is a Hi-Tech subheader capable of doing anything
        </SubHeader>
      </Header>

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
  );
}
