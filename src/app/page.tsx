import {
  Header,
  HeaderText,
  HeaderTitle,
  SubHeader,
} from '@/components/header';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-light min-h-screen">
        <Header alignment="left">
          <HeaderTitle size="text-sm">Good</HeaderTitle>
          <HeaderText
            size="text-2xl"
            coloredWords={['colored', 'big']}
            accentColor="text-primary-600">
            A big header with some Colored words
          </HeaderText>
          <SubHeader size="text-base">Subheader</SubHeader>
        </Header>
      </div>
    </>
  );
}
