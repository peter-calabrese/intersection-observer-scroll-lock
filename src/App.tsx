import { useEffect, useRef, useState } from 'react';
import SectionOne from './sections/SectionOne';
import SectionThree from './sections/SectionThree';
import SectionTwo from './sections/SectionTwo';
import './App.css';
import useElementOnScreen from './hooks/useElementOnScreen';
import useTimeout from './hooks/useTImeout';
const App = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });
  useEffect(() => {
    const instance = parentRef.current;
    const scroll = (event: any) => {
      var isTouchPad = event.wheelDeltaY
        ? event.wheelDeltaY === -3 * event.deltaY
        : event.deltaMode === 0;
      if (instance && isVisible) {
        console.log(isVisible);
        event.preventDefault();
        if (isTouchPad && count < 1) {
          const newTimeoutId = setTimeout(() => {
            console.log('stop');
            setCount(1);
          }, 100);
          setTimeoutId(newTimeoutId);
        }
      }
      if (count > 0) {
        screenRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        setCount(0);
      }
    };
    instance?.addEventListener('mousewheel', scroll, {
      passive: false,
    });
    return () => {
      clearTimeout(timeoutId);
      instance?.removeEventListener('mousewheel', scroll);
    };
  }, [isVisible, count, timeoutId]);
  return (
    <div ref={parentRef} className={'container'}>
      <h1>{isVisible ? 'Yes' : 'No'}</h1>
      <div className={'container-child'}>
        <SectionOne containerRef={containerRef} />

        <SectionTwo pageRef={screenRef} />
        <SectionThree />
      </div>
    </div>
  );
};

export default App;
