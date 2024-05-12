import './section.css';
const SectionTwo = ({ pageRef }: any) => {
  return (
    <div
      className={'section'}
      style={{
        background: 'lightpink',
      }}
      ref={pageRef}
    >
      <div>
        <h2>Section Two</h2>
      </div>
    </div>
  );
};
export default SectionTwo;
