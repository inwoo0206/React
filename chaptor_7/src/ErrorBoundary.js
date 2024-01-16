// 에러가 났을 때 에러가 났다고 표시해주면서 잡아주기
import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error,info){
        this.setState({
            error: true
        });
        console.log({error,info});
    }

    render() {
        if(this.state.error) return <div>에러가 발생했습니다.</div>
        return this.props.children;
    }
}

export default ErrorBoundary;