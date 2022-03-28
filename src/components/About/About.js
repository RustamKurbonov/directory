import React from 'react'
//import Style from './Photos.module.css'

const About = props => {
   
   return (
      <div className='about'>
         <div className='about__title title'>
            Описание
         </div>
         <div className='about__body'>
            {props.textTop}
         </div>
         <div className='about__img'>
            <img alt='test' src={props.img} />
         </div>
         <div className='about__body'>
            {props.textBottom}
         </div>
      </div>
   )
}

export default About;