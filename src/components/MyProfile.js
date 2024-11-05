import React, { Component } from 'react';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBio: false,
        };
    }

    toggleBio = () => {
        this.setState((prevState) => ({ showBio: !prevState.showBio }));
    };

    render() {
        const { showBio } = this.state;

        return (
            <div className="profile-container">
                <div className="profile-header">
                    <img
                        src="/images/ava.png"
                        alt="Profile"
                        className="profile-image"
                    />
                    <h2>Quang Bui</h2>
                    <button onClick={this.toggleBio} className="read-more-btn">
                        {showBio ? 'Read Less' : 'Read More'}
                    </button>
                    {showBio && (
                        <div className="profile-bio">
                            <p>
                                I’m Quang, a tech enthusiast and grad student at Oklahoma City University, working towards my Master’s in Computer Science
                            </p>
                        </div>
                    )}
                </div>

                <h3>Highlighted Projects</h3>
                <div className="projects">
                    <div className="project-card">
                        <h4>VidSummarizer</h4>
                        <img src="/images/project1.png" alt="VidSummarizer" className="project-image" />
                        <p>AI-driven web application designed to automatically generate concise summaries from YouTube video transcripts.</p>
                        <div className="tech-stack">
                            <span>Python</span>
                            <span>Langchain</span>
                            <span>Js</span>
                        </div>
                        <a href="https://github.com/duyquangbui99/vidsummarizer" target="_blank" rel="noopener noreferrer" className="project-link">
                            Project Link
                        </a>
                    </div>
                    <div className="project-card">
                        <h4>Math Bingo</h4>
                        <img src="/images/project2.png" alt="MathBingo" className="project-image" />
                        <p>Classic game of bingo into a math learning game by calling out math problems for kids to solve and mark on their bingo cards.</p>
                        <div className="tech-stack">
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <a href="https://github.com/duyquangbui99/math-bingo" target="_blank" rel="noopener noreferrer" className="project-link">
                            Project Link
                        </a>
                    </div>
                    <div className="project-card">
                        <h4>Rule-Based ChatBot</h4>
                        <img src="/images/project3.png" alt="Chatbot" className="project-image" />
                        <p>Web-based virtual assistant designed to provide quick responses to common questions about a business by fetching data from JSON.</p>
                        <div className="tech-stack">
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>

                        </div>
                        <a href="https://github.com/duyquangbui99/Support-Chatbot" target="_blank" rel="noopener noreferrer" className="project-link">
                            Project Link
                        </a>
                    </div>
                </div>

                <h3>Connect with me!!</h3>
                <div className="social-icons">
                    <a href="https://github.com/duyquangbui99" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" alt="Github" className="icon-image" />
                    </a>
                    <a href="https://www.linkedin.com/in/quang-bui-4b7059256/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.png" alt="LinkedIn" className="icon-image" />
                    </a>
                    <a href="mailto:qbui@my.okcu.edu">
                        <img src="/images/email.png" alt="Email" className="icon-image" />
                    </a>

                </div>
            </div>
        );
    }
}

export default MyProfile;
