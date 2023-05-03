import React from 'react'

const Aboutme = () => {
  return (
    <div>
        <h1 className='titles'>About me...</h1>
        <p className='aboutme'>
        Fullstack developer with studies in sports and health science. I'm multitasked, organized, 
        agile, responsible, committed and empathetic. Because of my lastest 5 years of experience 
        in Sports Nutrition, I have powered my team-work skills to make decisions.<br/>
        I'm looking a stimulated work environment one, which would let me develop, empower and 
        build technical skills as soft-skills. Consequently, I would like to start up as Junior 
        Fullstack developer in a company which appreciates colabotative work and where I could 
        participate in front-end and back-end tasks. In the long term my goal is to achieve the 
        merging between tecnology and sports nutrition.
        </p>
    

      <button className='curriculum'>
      <a className='curriculum' href='./curriculum.pdf' download>
            Descargar Curriculum
      </a>
      </button>
    </div>
  )
}

export default Aboutme