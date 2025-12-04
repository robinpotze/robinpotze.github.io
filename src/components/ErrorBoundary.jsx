import React from 'react';

/**
 * Error Boundary Component
 * Catches errors in child components and displays fallback UI
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--c-DRK)',
                    color: 'var(--c-LGHT)',
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: 'var(--f-FUNCTIONAL)',
                    zIndex: 9999
                }}>
                    <h1 style={{ marginBottom: '1rem', color: 'var(--c-BRND)' }}>
                        Something went wrong
                    </h1>
                    <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
                        An unexpected error occurred while rendering this component.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={this.handleReset}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'var(--c-BRND)',
                                color: 'var(--c-DRK)',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontWeight: 600
                            }}
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'transparent',
                                color: 'var(--c-LGHT)',
                                border: '1px solid var(--c-LGHT)',
                                textDecoration: 'none',
                                fontFamily: 'inherit',
                                fontWeight: 600
                            }}
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
