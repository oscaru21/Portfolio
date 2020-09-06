import React from 'react'
import Card from './Card'
import './Cards.css'
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import GitHubIcon from '@material-ui/icons/GitHub';

function Cards() {
    return (
        <div className="cards">
            <h1>Skills</h1>
            <div className="row">
                <div className="col-md-4">
                    <Card 
                        header= {<CodeIcon />}
                        title="Technologies"
                        content={
                            <ul>
                                <li>JavaScript</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                                <li>ReactJs</li>
                                <li>Bootstrap</li>
                                <li>nodeJS</li>
                                <li>C++</li>
                                <li>VHDL</li>
                            </ul>
                        }
                    />
                </div>
                <div className="col-md-4">
                    <Card 
                        header= {<BuildIcon />}
                        title="Tools"
                        content={
                            <ul>
                                <li>VS code</li>
                                <li>Git</li>
                                <li>NPM</li>
                                <li>GitHub</li>
                            </ul>
                        }
                    />
                </div>
                <div className="col-md-4">
                    <Card 
                        header= {<GitHubIcon />}
                        title="GitHub"
                        content="oscaru21"
                    />
                </div>
            </div>
        </div>

    )
}

export default Cards
