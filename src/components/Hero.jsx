import React from 'react'
import './Hero.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    large: {
        filter: "grayscale(100%)",
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  }));

function Hero() {
    const classes = useStyles();
    return (
        <div className="hero">
            <div className="hero__content row">
                <div className="hero__info col-md-6">
                    <p>Front end web developer.</p>
                    <h1>Hi, <br/> I'm Oscar Umaña </h1>
                    <div className="button-wrap">
                        <a href="/CV-OscarUmana.pdf" target="_blank">Descargar CV</a>
                    </div>
                </div>
                <div className="hero__image col-md-6">
                    <Avatar src="./images/me.jpg" className={classes.large}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
