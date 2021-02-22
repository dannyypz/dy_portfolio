import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../work-from-home.svg';
import { ReactComponent as SchoolIcon } from '../graduated.svg';
import timelineData from '../TimelineData/TimelineData';


const Experience = () => {
    let WorkIconStyles = {background: "#2a9d8f"}
    let SchoolIconStyles = {background: "#e76f51"}
    return (
        <div>
            <h1 className="timelineTitle">Experience Timeline</h1>
                <VerticalTimeline>
                        {timelineData.map((element) => {
                            let isWorkIcon = element.icon === "work";
                            return(
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon ? WorkIconStyles : SchoolIconStyles}
                                    icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-tilte">{element.title}</h3>
                                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                    <p id="description">{element.description}</p>
                                </VerticalTimelineElement>
                            );
                        })} 
                </VerticalTimeline>
        </div>
    )
}

export default Experience
