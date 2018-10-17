import React from 'react';

class ErrorBoundary extends React.Component {
    componentDidCatch(err, info) {
        this.setState({
            hasError: true
        });

        logger(err, info);
    }
}

// Use
<ErrorBoundary>
    <App />
</ErrorBoundary>