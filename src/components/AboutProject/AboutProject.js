import React from 'react'
import './AboutProject.css'

const AboutProjects = () => {
  return (
    <div className='about-project'>
      <h2 className='about-project__header'>О проекте</h2>
      <div className='about-project__description'>
        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__weeks'>1 неделя</div>
        <div className='about-project__weeks'>4 недели</div>
        <span className='about-project__span'>Back-end</span>
        <span className='about-project__span'>Front-end</span>
      </div>
    </div>
  )
}

export default AboutProjects