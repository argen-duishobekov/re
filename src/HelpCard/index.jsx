import React from 'react'
import style from './HelpCard.module.css'
export const HelpCard =({title,bg})=> {
  return (
    <div style={{backgroundColor:bg}} className={style.helpCard}>
        <hr />
        <h3>{title}</h3>
    </div>
  )
}
