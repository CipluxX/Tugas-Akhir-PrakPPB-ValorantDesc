import { wx, W } from 'windstitch';

const concept = wx({
  variants: {
    concept: {
      button: `items-center bg-indigo-500 rounded-[28px] shadow-md p-4`,
      buttonText: `text-white text-lg font-semibold text-center`,
      container: `flex-1 p-6`,
      main: `flex-1 max-w-[960] justify-start`,
      title: `text-[64px] font-bold text-center`,
      subtitle: `text-4xl text-gray-700 text-center text-gray-200`,
    },
    primary:{
      button:``
    }
  },
});

type Concept<T> = {
  button: T;
  buttonText: T;
  container: T;
  main: T;
  title: T;
  subtitle: T;
};

export const styles = {
  button: concept({
    concept: 'button',
  }),
  buttonText: concept({
    concept: 'buttonText',
  }),
  container: concept({
    concept: 'container',
  }),
  main: concept({
    concept: 'main',
  }),
  title: concept({
    concept: 'title',
  }),
  subtitle: concept({
    concept: 'subtitle',
  }),
} satisfies Concept<W.Infer<typeof concept>>;
