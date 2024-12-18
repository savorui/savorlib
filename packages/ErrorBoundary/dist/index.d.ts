import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}
interface State {
    hasError: boolean;
    error: Error | null;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;
}

export { type ErrorBoundaryProps, ErrorBoundary as default };
