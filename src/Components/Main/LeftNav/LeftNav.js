import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.scss';
import './LeftNav.css';

import { getUid } from '../../../utils/uid';

import TopicBrowser from './TopicBrowser/TopicBrowser';


const topicList = [
    {
        name: 'Forum!!!',
        url: '/main/forum',
        expanded: true,
        subtopics: [
            {
                expanded: false,
                name: 'Topic 1',
                url: '/main/forum/topic',
                subtopics: [
                    {
                        name: 'subtopic 1',
                        url: '/main/forum/topic/134',
                        subtopics: [
                            {
                                name: 'sub-subtopic',
                                url: '/main/forum/topic/134/234'
                            }
                        ]
                    },
                    {
                        name: 'subtopic 2',
                        url: '/main/forum/topic/134',
                        subtopics: [
                            {
                                name: 'sub-subtopic',
                                url: '/main/forum/topic/134/234'
                            }
                        ]
                    },
                ],
            },
            {
                expanded: false,
                name: 'Topic 2',
                url: '/main/forum/topic',
                subtopics: [
                    {
                        name: 'subtopic',
                        url: '/main/forum/topic/134',
                        subtopics: [
                            {
                                name: 'sub-subtopic',
                                url: '/main/forum/topic/134/234'
                            }
                        ]
                    }
                ],
            },
        ]
    }
];

const LeftNav = ({ match }) => {
    const topics = topicList
        .map(topic => (topic.key = getUid()) > -1 && topic)
        .map(topic => <TopicBrowser key={topic.key} topic={topic} />);
    
    return (
        <div className="left-nav">
            <div className="navigation">
                <h2>Topic List</h2>
                
                <ul style={{ padding: 0 }}>
                    {topics}
                </ul>
            </div>
        </div>
    );
};

export default LeftNav;