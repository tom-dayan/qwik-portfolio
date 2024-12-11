/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import pkg from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../components/styles/Timeline.scss';

const { VerticalTimeline, VerticalTimelineElement } = pkg;

export const Timeline = qwikify$(() => {
  return (
    <div id="timeline">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          {/* SightX AI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2021 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tel Aviv, Isral</h4>
            <p>
              Backend Development, Edge AI, API Development, Team Leadership
            </p>
          </VerticalTimelineElement>

          {/* Elbit Systems */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics QA Team Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">Yokneam, Israel</h4>
            <p>
              Automation Tools, Software Development, Testing Frameworks
            </p>
          </VerticalTimelineElement>

          {/* Elbit Systems Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics QA Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Yokneam, Israel</h4>
            <p>
              Full-stack Development, UI/UX Design, Software Integration
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}, { eagerness: 'load' });

// export default Timeline;
