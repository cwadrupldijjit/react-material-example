import React, { Component } from 'react';

import './TopicBrowser.scss';
import './TopicBrowser.css';

import { Link } from 'react-router-dom';
import { getUid } from '../../../../utils/uid';

class TopicBrowser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.topic,
            expanded: this.props.topic.expanded || false,
            key: this.props.topic.key || getUid(),
            subtopics: this.props.topic.subtopics || [],
        };
    }

    componentWillReceiveProps(props) {
        this.setState(s => ({
            ...s,
            ...props,
            subtopics: this.props.topic.subtopics || [],
        }));
    }

    render() {
        const topics = this.state.subtopics
            .map(topic => (
                <TopicBrowser key={topic.key = topic.key || getUid()} topic={topic} />
            ));

        return (
            <li className={`${this.state.expanded ? 'expanded' : 'collapsed'} topic`}>
                <div className="left-padding">
                    {!!this.state.subtopics.length && <span className="carat" onClick={e => { this.toggleExpand() }}>></span>}
                </div>

                <ul className="topic-list">
                    <Link to={this.state.url}><h5>{this.state.name}</h5></Link>

                    {!!this.state.subtopics.length && this.state.expanded && topics}
                </ul>
            </li>
        );
    }

    toggleExpand() {
        this.setState(s => ({ expanded: !s.expanded }));
    }
}

export default TopicBrowser;