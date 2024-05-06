'use client';
export interface HeaderProps {
  title?: string;
  titleFontSize?: 'xs' | 'sm' | 'base';
  header: string;
  headerFontSize?: 'xl' | '2xl' | '4xl';
  subheader?: string;
  headerColor?: string;
  headerWordColor?: string;
  subHeaderColor?: string;
  subHeaderFontSize?: 'sm' | 'base' | 'xl';
  titleColor?: string;
  coloredWords?: string[];
  alignment?: 'left' | 'center' | 'right';
}

export default function Header(props: HeaderProps) {
  const {
    title,
    titleColor,
    header,
    headerColor,
    coloredWords,
    headerWordColor,
    subheader,
    subHeaderColor = 'orange-600',
    alignment,
    headerFontSize,
    subHeaderFontSize,
    titleFontSize,
  } = props;

  return (
    <div
      className={`text-${titleColor} ${alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'} flex flex-col gap-4`}>
      {/* title */}
      {title && <h1 className={`${titleColor} text-sm`}>{title}</h1>}

      {/* header */}
      <h2 className={`text-${headerColor} text-2xl font-bold`}>
        {header.split(' ').map((word, index) => {
          return coloredWords?.includes(word.trim()) ? (
            <span key={index} className={`${headerWordColor}`}>
              {word}{' '}
            </span>
          ) : (
            <span className="text-dark" key={index}>
              {word}{' '}
            </span>
          );
        })}
      </h2>

      {/* sub header */}
      {subheader && (
        <span className={`text-${subHeaderColor}`}>{subheader}</span>
      )}
    </div>
  );
}
