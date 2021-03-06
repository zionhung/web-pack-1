import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container" style={{ height: '100%', width: '100%', margin: 'auto 0' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png" alt="avatar" className="avatar-img"></img>
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JQuery | JavaScript&NodeJS | React(MERN)| Vue | Django | Flask | Express | MongoDB | SQLite | C# | Angular(MEAN)| ASP.NET Core</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Freecodecamp */}
                                <a href="http://codecamp.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                {/* YouTube */}
                                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;