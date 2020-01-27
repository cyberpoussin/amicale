import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Inf = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-bottom:1em;
    p {
      margin:0;
    }
    text-transform: uppercase;
    font-weight:300;
    color:black;
    .cats{
      font-size:70%;
    }
`

const Infos=(props)=>{
  const rootPath = `${__PATH_PREFIX__}/`
  let date=[];
  const dateActuelle=new Date();
  let vieux=false;
  let annee=null;
  if(typeof(props.date)=== 'string') { date=props.date.split(' '); }
  if(props.date && typeof(props.date)!== 'string' && props.location.pathname === rootPath) {
    date=props.date.toLocaleDateString('fr-FR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'numeric', timeZone: "Europe/Paris"}).split(' ')
  }
  if(props.date && typeof(props.date)!== 'string' && props.location.pathname !== rootPath) {date=props.date.toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', timeZone: "Europe/Paris"}).split(' ')}
  if(props.date && typeof(props.date)!== 'string' && props.date.getUTCFullYear()<dateActuelle.getUTCFullYear()) {
    annee=props.date.toLocaleDateString('fr-FR', {year:'numeric'});
  }
  return (
    <Inf>
        <p>{date[0]? date[0]+' '+date[1]+' '+date[2]:'Il y a très longtemps'}{annee?' '+annee:''}</p>
        <p>–{annee}</p>
        <p>{date[5]?date[5]:date[3]}</p>
        <p className="cats">{props.cats && props.cats.map(tag=>(tag.name+' '))}</p>
    </Inf>
)}

export default Infos;