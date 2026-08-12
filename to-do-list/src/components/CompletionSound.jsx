import { useEffect } from 'react';

const CompletionSound = ({ isCompleted }) => {
  useEffect(() => {
    if (isCompleted) {
      const audio = new Audio('/assets/sounds/completion.mp3');
      audio.play();
    }
  }, [isCompleted]);

  return null;
};

export default CompletionSound;