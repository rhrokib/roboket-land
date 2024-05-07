import { Button } from '@/components/button/button';
import {
  Header,
  HeaderText,
  HeaderTitle,
  SubHeader,
} from '@/components/header';
import { FaGoogle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';

import { Collapsible } from '../components/collapsible';

export const metadata = {
  title: 'Roboket',
};

import { Tick } from '../components/tick';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-light min-h-screen">
        <div className="flex flex-col gap-3">
          <Header alignment="left">
            <HeaderTitle color="text-primary-600" size="text-sm">
              This is a title
            </HeaderTitle>
            <HeaderText
              size="text-2xl"
              coloredWords={['colored']}
              accentColor="text-primary-600"
            >
              A big header with some Colored words
            </HeaderText>
            <SubHeader size="text-base">Subheader</SubHeader>
          </Header>
          <Header alignment="left">
            <HeaderTitle size="text-sm">This is a title</HeaderTitle>
            <HeaderText
              size="text-2xl"
              coloredWords={['colored']}
              accentColor="text-primary-600"
            >
              A big header with some Colored words
            </HeaderText>
            <SubHeader size="text-base">Subheader</SubHeader>
          </Header>
          <Collapsible title={'Hello, open me'}>
            Thanks for opening me
          </Collapsible>
          <Buttons />
        </div>
        <div>
          <Tick
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            }
            label={'This is new addition'}
            fontSize="text-sm"
            color="text-primary-600"
          />
        </div>
      </div>
    </>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 my-5">
      <Button label="Button 4" variant="light" />
      <Button
        label="Button 5"
        size="medium"
        variant="secondary"
        rightIcon={<FaGoogle />}
      />
      <Button
        label="Button 6"
        size="large"
        variant="accent"
        leftIcon={<FaRegCircleCheck className="text-primary-600" />}
      />
      <Button
        label="Button 7"
        size="small"
        variant="primary"
        outline
        rightIcon={<FaGoogle />}
        leftIcon={<FaGoogle className="text-4xl text-red-900" />}
      />
    </div>
  );
}
