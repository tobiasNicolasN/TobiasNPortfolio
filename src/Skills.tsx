'use client';
import { useState } from 'react';
import {
  ISkills,
  skillsBack,
  skillsFront,
  skillsGoals,
  skillsTools,
} from './skillsArrays';
import { useLang } from '@/context/LanguageContext';
import { Element } from 'react-scroll';

function Skills() {
  const { language } = useLang();
  const lang = language === 'spanish';

  // 0 = Front-end, 1 = Back-end, 2 = Tools, 3 = Goals
  const [skill, setSkill] = useState<number>(0);
  const [animationSkills, setAnimationSkills] = useState(false);

  // Realiza la transición previo al cambio de array
  const changeSkill = (numSkills: number) => {
    setAnimationSkills(true);
    setTimeout(() => {
      setSkill(numSkills);
      setAnimationSkills(false);
    }, 200);
  };

  const skills: ISkills[][] = [
    skillsFront,
    skillsBack,
    skillsTools,
    skillsGoals,
  ];

  return (
    <Element
      name="skills"
      className="flex flex-col w-full items-left mb-40 font-sans text-gray-200"
    >
      <h1 className="text-4xl font-mono font-medium">
        {lang ? 'HABILIDADES' : 'SKILLS'}
      </h1>
      <div className="flex flex-wrap flex-col mt-8">
        <div className="flex gap-6 mb-6">
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${
              skill === 0 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(0)}
            id="button"
          >
            FRONT-END
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${
              skill === 1 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(1)}
          >
            BACK-END
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${
              skill === 2 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(2)}
          >
            TOOLS
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${
              skill === 3 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(3)}
          >
            {lang ? 'METAS' : 'GOALS'}
          </button>
        </div>
        <div
          className={`flex flex-wrap gap-6 duration-300 ${
            animationSkills ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {skills[skill].map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg items-center justify-center bg-button bg-opacity-50 w-32 h-32 hover:bg-opacity-100 hover:scale-105 duration-300"
            >
              <div className="w-12 h-12">
                <data.svg />
              </div>
              <h1 className="text-sm">{data.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Skills;
