import React from 'react';
import ReactDOM from 'react-dom';
// use when a child need to be rendered outside of its hierarchy
// overlays, tooltips...

class Tooltip  extends React.Component {
    render() {
        ReactDOM.createPortal(
            this.props.children,
            this.props.targetDomNode
        );
    }
}

class LinkWithTooltip extends React.Component {
    render() {
        <Tooltip targetDomNode={document.getElementsByTagName('body')}>
            <div>
                this.props.text
            </div>
        </Tooltip>
    }
}