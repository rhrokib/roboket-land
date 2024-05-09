import Page1 from './home/page1';
import Page2 from './home/page2';

export default function Home() {
  return (
    <>
      <div className="relative">
        <Page1 />
        <Page2 />
      </div>
    </>
  );
}
