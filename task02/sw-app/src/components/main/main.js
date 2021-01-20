import React, { Component } from 'react';
import { BASE_IMAGES_URL } from '../../services/sw-service';
import './main.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    handlerOnClick() {
        this.setState((prev) => {
            const nextCount = prev.count < this.props.posts.length - 1 ? prev.count + 1 : 0;
            return {
                count: nextCount,
            };
        });
    }

    addDefaultSrc(ev) {
        ev.target.src = `${BASE_IMAGES_URL}big-placeholder.jpg`;
    }

    render() {
        const posts = this.props.posts;
        const i = this.state.count;
        const post = posts[i];

        return (
            <div className="Main">
                <button type="button" className="Main-button" onClick={this.handlerOnClick}>NEXT</button>
                <div className="Main-header">
                    <img
                        src={post.img}
                        alt={post.name}
                        onError={e => this.addDefaultSrc(e)}
                        className="Main-img" />
                    <h3>{post.name}</h3>
                </div>
                <ul className="Main-list">
                    {Object.keys(post.content).map(key => (
                        <li key={key} className="card-panel">
                            {key}: {post.content[key]}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;
