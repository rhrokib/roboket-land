interface iconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function IconCard({
  icon,
  title,
  description,
  ...props
}: iconCardProps) {
  return (
    <>
      <div className="flex flex-col gap-1 bg-accent-200 mr-10 p-5 rounded-md sm:w-50">
        <div className="mb-2">{icon}</div>
        <div className="text-light">{title}</div>
        <div className="text-secondary text-sm">{description}</div>
      </div>
    </>
  );
}
