import React, { useEffect, useRef, useState } from 'react';
import { getElementPosition, getScrollPosition } from '~/helpers';
import { P } from '~/layouts';

import { Container, Title } from './styles';

const FeatureBox: React.FC<FeatureBoxProps> = ({
  finalValue,
  animationTotalTime = 3000,
  actionsFrequency = 50,
  content,
  hasPlus,
}) => {
  const ref = useRef<HTMLDivElement>();
  const [currentValue, setCurrentValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = getScrollPosition();
      const elementPosition = getElementPosition(ref?.current, 'top');
      if (!isVisible && scroll >= elementPosition) {
        setIsVisible(true);
      }
    });
    return window.removeEventListener('scroll', () => {});
  }, []);

  useEffect(() => {
    if (isVisible) {
      const actionsNumber = animationTotalTime / actionsFrequency;
      const increaseAmount = finalValue / actionsNumber;
      setIntervalId(
        setInterval(() => {
          setCurrentValue((prevValue) => prevValue + increaseAmount);
        }, actionsFrequency)
      );
    }
  }, [finalValue, animationTotalTime, actionsFrequency, isVisible]);

  useEffect(() => {
    if (currentValue >= finalValue) {
      clearInterval(intervalId);
    }
  }, [intervalId, currentValue]);

  return (
    <Container ref={ref}>
      <Title>
        {finalValue < currentValue ? finalValue : Math.floor(currentValue)}
        {hasPlus && '+'}
      </Title>
      <P>{content}</P>
    </Container>
  );
};

export default FeatureBox;
