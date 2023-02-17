## New Page
### page.tsx
```tsx
import InfiniteCanvas from '../components/infiniteCanvas/infiniteCanvas'
import PageContent from '../components/pageContent';

export default function Page() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(PageContent)
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1}/>
    </div>
  ) 
}
```
### pageContent.tsx
```tsx
import { type infProps, type posDict, InfDiv } from './infiniteCanvas/infiniteDiv'

import styles from '../styles/Page.module.css'

const offsetx = 0
const pos : posDict = {
  title: [offsetx, 0],
  subtitle: [offsetx, 50],
}

export default function PageContent = (props: infProps) => {

  return (
    <>
      <InfDiv {...props} pos={pos.title} align='left'>
        <h2 className={styles.title}>
          Platz
        </h2>
      </InfDiv>
    </>
  )
}
```
### Page.module.css
```css
.title {
  font-size: 48px;
  font-weight: 600;
  color: #000;
}
```

