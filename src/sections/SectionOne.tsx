import './section.css';
interface Props {
  containerRef: any;
}
const SectionOne = ({ containerRef }: Props) => {
  return (
    <div
      className={'section'}
      style={{
        background: 'plum',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h2>Section One</h2>
        <div
          style={{
            height: 10,
            // bottom: 10;
            background: 'red',
            width: 100,
            margin: 1,
          }}
          ref={containerRef}
        />
      </div>
    </div>
  );
};
export default SectionOne;
