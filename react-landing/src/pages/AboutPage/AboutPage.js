import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

class AboutPage extends Component {
  render() {
    const { theme: { colorPrimary, colorHighlight, bgPrimary } } = this.context;
    
    return (
      <div className="about-page" style={{ backgroundColor: bgPrimary }}>
        <style jsx>{`
          .highlight {
            background-color: ${colorHighlight};
          }
        `}
        </style>
        <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
          <div className="about-wrapper">
            <div className="about-content">
              <p>I like <span className="highlight">JavaScript</span> and everything web.</p>
              <p>When my dev senses kick-in I build presumably <span className="highlight"> awesome stuff</span>. I stay close to the community and try to keep tabs with the pace at which the web is evolving. I also like to <span className="highlight">blog</span> what I learn.</p>
              <p>I built this site <span className="highlight">from scratch</span>. By scratch, I mean <i>absolutely from scratch</i> <span className="highlight">without any UI library/framework</span> (not counting react) and had so much fun along the way.</p>
              <p>React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and AWS are the main tricks up my sleeve.</p>
              <p className='text-emoji' style={{ color: colorPrimary }}>\ (•◡•) /</p>
            </div>
          </div>        
          
        </div>
        <ScrollToNext pageSelector='.portfolio-page' />
      </div>
    );
  }
}

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;