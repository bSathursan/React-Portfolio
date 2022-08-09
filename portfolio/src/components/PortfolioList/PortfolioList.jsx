import React from 'react'
import './PortfolioList.scss'

export default function PortfolioList({id, title, active, setSeleceted}) {
  return (
    <li className={ active ? "portfoliolist active" : 'portfoliolist'} onClick={() => setSeleceted(id)}>
      {title}
    </li>
  )
}
