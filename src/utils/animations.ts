export const scrollAnimationVariants = {
  hidden: {
    opacity: 0,
    x: '-100%',
    y: '100%',
  },
  enter: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
  exit: (i: number = 0) => ({
    opacity: 0,
    x: '100%',
    y: '100%',
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};
