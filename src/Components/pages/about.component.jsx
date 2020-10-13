import React from 'react'

const About = () => {

  const styles = {
    fontSize: '0.8rem',
    color: '#858585',
    width: '90%',
    maxWidth: '800px',
    padding:'12px',
    margin: '30px auto',
    lineHeight: '1.6',
    border: '1px solid #858585',
    borderRadius: '6px',
    fontFamily: 'Helvetica'
  }

  return (
    <div style={styles} className="fade">
      <h1> GitHub Finder Application </h1>
      <p>App is used to search for github users</p>
      <p>Developed by Ahmed Hamood</p>
    </div>
  )
}

export default About;