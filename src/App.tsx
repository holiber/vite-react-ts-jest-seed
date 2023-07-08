import './App.less'
import { components } from './components/components.ts';
export function App() {
  return Object.keys(components)
    .filter(componentName => componentName.endsWith('Demo'))
    .map((componentName) => {
    const Component = (components as any)[componentName];
    return <Component key={componentName} />
  });
}

