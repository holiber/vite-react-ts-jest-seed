import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

export function HelloWorld() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Hello World</h1>

        </>
    )
}
