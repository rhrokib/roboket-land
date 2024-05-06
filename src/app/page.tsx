import Header from "../components/multi-heading";
export default function Home() {
  const { data, error, others } = whatever(12);
  return (
    <>
      <div className="flex justify-center items-center bg-light min-h-screen">
        <Header
          header="Advanced platform for your customer"
          subheader="A new look!"
          title="Welcome to our platform"
          coloredWords={["platform", "customer"]}
          headerColor="dark"
          headerWordColor="text-primary-600"
          // subHeaderColor="secondary"
          headerFontSize="4xl"
          titleColor="text-red-700"
          titleFontSize="base"
        />
      </div>
    </>
  );
}

export function whatever(model: any) {
  const data = "something";
  const error = "something";
  const others = "something";
  return { data, error, others };
}
