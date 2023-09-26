type Transition = {
  type?: 'tween' | 'spring';
  ease?: 'easeIn' | 'easeOut';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  delayChildren?: number;
};

type State = {
  x?: string | number;
  y?: string | number;
  scale?: number;
  opacity: number;
  transition?: Transition;
};

type Animation = {
  hidden: State;
  show: State;
};

type AnimationVariant = {
  hidden: {
    x?: number | string;
    y?: number | string;
    scale?: number;
    opacity?: number;
  };
  show: {
    x?: number | string;
    y?: number | string;
    scale?: number;
    opacity: number;
    transition: Transition;
  };
};

type Direction = 'left' | 'right' | 'up' | 'down';

export const fadeIn = (
  direction: Direction,
  type: 'tween' | 'spring',
  delay: number,
  duration: number
): AnimationVariant => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay: number, duration: number): AnimationVariant => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: 'tween' | 'spring',
  delay: number,
  duration: number
): Animation => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};
