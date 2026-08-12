import { v4 as uuidv4 } from 'uuid';

export const generateId = () => {
  return uuidv4();
};

export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

export const playCompletionSound = (audioFile) => {
  const audio = new Audio(audioFile);
  audio.play();
};