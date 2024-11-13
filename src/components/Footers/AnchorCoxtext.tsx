import { createContext } from 'react';

type Context = {
  discord: { anchor: string; source: string };
  x: { anchor: string; source: string };
  github: { anchor: string; source: string };
};

export const AnchorContext = createContext<Context>({
  discord: {
    anchor: 'https://discord.com/invite/9V5MWgD',
    source:
      'https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png',
  },
  x: {
    anchor: 'https://twitter.com/ValorantAPI',
    source:
      'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
  },
  github: {
    anchor: 'https://github.com/97revenge/valorant-app',
    source: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
  },
});
