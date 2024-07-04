import tsSVG from '../public/images/typescript.svg';
import jsSVG from '../public/images/javascript.svg';
import nextSVG from '../public/images/nextjs.svg';
import reactSVG from '../public/images/react.svg';
import htmlSVG from '../public/images/html.svg';
import cssSVG from '../public/images/css.svg';
import tailwindSVG from '../public/images/tailwind.svg';
import figmaSVG from '../public/images/figma.svg';
import nodeSVG from '../public/images/nodejs.svg';
import expressSVG from '../public/images/express.svg';
import firebaseSVG from '../public/images/firebase.svg';
import mongodbSVG from '../public/images/mongodb.svg';
import npmSVG from '../public/images/npm.svg';
import vscodeSVG from '../public/images/vscode.svg';
import gitSVG from '../public/images/git.svg';
import githubSVG from '../public/images/github.svg';
import actionsSVG from '../public/images/actions.svg';
import dockerSVG from '../public/images/docker.svg';
import graphqlSVG from '../public/images/graphql.svg';
import jestSVG from '../public/images/jest.svg';
import { ReactElement } from 'react';

// Contiene el nombre de la habilidad y su respectiva svg
export interface ISkills {
  name: string;
  svg: any;
}

export const skillsFront: ISkills[] = [
  {
    name: 'TypeScript',
    svg: tsSVG,
  },
  {
    name: 'JavaScript',
    svg: jsSVG,
  },
  {
    name: 'Next.js',
    svg: nextSVG,
  },
  {
    name: 'React',
    svg: reactSVG,
  },
  {
    name: 'HTML5',
    svg: htmlSVG,
  },
  {
    name: 'CSS3',
    svg: cssSVG,
  },
  {
    name: 'Tailwind CSS',
    svg: tailwindSVG,
  },
  {
    name: 'Figma',
    svg: figmaSVG,
  },
];

export const skillsBack: ISkills[] = [
  {
    name: 'Node.js',
    svg: nodeSVG,
  },
  {
    name: 'Express',
    svg: expressSVG,
  },
  {
    name: 'Firebase',
    svg: firebaseSVG,
  },
  {
    name: 'MongoDB',
    svg: mongodbSVG,
  },
  {
    name: 'NPM',
    svg: npmSVG,
  },
];

export const skillsTools: ISkills[] = [
  {
    name: 'VS Code',
    svg: vscodeSVG,
  },
  {
    name: 'GIT',
    svg: gitSVG,
  },
  {
    name: 'GitHub',
    svg: githubSVG,
  },
  {
    name: 'GitHub Actions',
    svg: actionsSVG,
  },
];

export const skillsGoals: ISkills[] = [
  {
    name: 'Docker',
    svg: dockerSVG,
  },
  {
    name: 'GraphQL',
    svg: graphqlSVG,
  },
  {
    name: 'Jest',
    svg: jestSVG,
  },
];
