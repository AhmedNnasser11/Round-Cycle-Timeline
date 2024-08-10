
# rounded-cycle-timeline-react

**rounded-cycle-timeline-react** is a React and Next.js component designed to display a cycle timeline with rotating avatars or any other view you need.

## Example on CodeSandbox

You can find a live example of how to use this component on CodeSandbox:

[CodeSandbox Example](https://codesandbox.io/p/sandbox/rounded-timeline-example-vdrnrz?file=%2Fsrc%2FApp.tsx%3A19%2C11)

## Author

[Ahmed Nasser](https://www.linkedin.com/in/ahmed-nasser-931490212/)

## Installation

To install the package, use the following npm command:

```bash
npm install rounded-cycle-timeline-react
```

## Usage

### In a React Application

```javascript
import React from 'react';
import CyrcleTimeLine from 'rounded-cycle-timeline-react';

const App = () => {
  return (
    <div>
      <h1>CyrcleTimeLine Example</h1>
      <CyrcleTimeLine 
        innerCyrcleClasss="custom-inner-class" 
        avatarContainerClasss="custom-avatar-container" 
        arrayData={[1, 2, 3, 4, 5]} 
        rotate={true} 
        duration={5000}
        relativeContainerClasss="custom-relative-class"
      />
    </div>
  );
};

export default App;
```

### In a Next.js Application

```javascript
import React from 'react';
import dynamic from 'next/dynamic';

const CyrcleTimeLine = dynamic(() => import('rounded-cycle-timeline-react'), { ssr: false });

const Home = () => {
  return (
    <div>
      <h1>CyrcleTimeLine Example</h1>
      <CyrcleTimeLine 
        innerCyrcleClasss="custom-inner-class" 
        avatarContainerClasss="custom-avatar-container" 
        arrayData={[1, 2, 3, 4, 5]} 
        rotate={true} 
        duration={5000}
        relativeContainerClasss="custom-relative-class"
      />
    </div>
  );
};

export default Home;
```

## Props

| Prop Name                | Type                         | Default               | Description                                               |
| ------------------------ | ---------------------------- | --------------------- | --------------------------------------------------------- |
| `innerCyrcleClasss`      | `string`                     | `""`                  | Custom class for the inner circle.                        |
| `avatarComponent`        | `React.ComponentType`        | `Avatar`              | Component to use for rendering avatars.                   |
| `avatarContainerClasss`  | `string`                     | `""`                  | Custom class for the avatar container.                    |
| `arrayData`              | `T[] | any[]`               | `[1, 2, 3, 4, 5, 6, 7, 8, 9, 99]` | Data array for the avatars.                               |
| `rotate`                 | `boolean`                    | `true`                | Whether the timeline should rotate.                       |
| `duration`               | `number`                     | `10000`               | Duration of one rotation cycle in milliseconds.           |
| `relativeContainerClasss`| `string`                     | `""`                  | Custom class for the relative container.                  |

## License

This project is licensed under the MIT License.
