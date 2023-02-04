import React, { Fragment, useState } from 'react';
import Link from 'next/link';

import styles from '../styles/NavBar.module.css'
import cx from 'classnames';

interface Item {
  text: string,
  active: boolean,
}

const initItems = [{
  text: 'home',
  active: true,
}, {
  text: 'features',
  active: false,
}, {
  text: 'tutorial',
  active: false,
}, {
  text: 'about',
  active: false,
}] 

const NavBar = () => {
  const [items, setItems] = useState<Item[]>(initItems);


  function changeActiveItem( i: number ) {
    const highlight = document.querySelector("#nav-item-highlighter") as HTMLElement;
    const item = document.querySelector(`#item-${i}`) as HTMLElement;
    const container = document.querySelector("#nav-container") as HTMLElement;
    if (highlight && item && container) {
      // use item offset and highlight offset and container offset to calculate the position of the highlighter
      const highlightOffset = highlight.offsetWidth / 2;
      const itemOffset = item.offsetLeft + item.offsetWidth / 2;
      const containerOffset = container.offsetLeft;
      const position = itemOffset + containerOffset - highlightOffset;
      // use left % to position the highlighter
      highlight.style.left = `${position}px`;
    }
  
    const newItems = items.map((item, index) => {
      return {
        ...item,
        active: index == i ? true : false,
      }
    });
    setItems(newItems);
  }

  function renderItem({ text }: Item) {
    return (
      <Fragment key={ text }>
        <span className={styles["nav-item-text"]}>
          { text }
        </span>
      </Fragment>
    );
  }


  return (
    <div className={styles["nav-container"]} id={"nav-container"}>
    {
      items.map((item, i) => (
        // <Link href={item.text}>
          <div
            // className={ styles[`nav-item item-${i} ${item.active ? 'active' : ''}`] }
            className={ cx(
              styles['nav-item'],
              styles[`item-${i}`],
              styles[item.active ? 'active' : ''],
            ) }
            id={ `item-${i}` }
            key={ item.text }
            onClick={ () => changeActiveItem(i) }
          >
            { renderItem(item) }
          </div>
        // </Link>
      ))
    }
    <div className={styles["nav-item-highlighter"]} id={"nav-item-highlighter"}/>
  </div>
    // <>
    //   <form>
    //     <label className={styles.error}>
    //       <div className={styles.toggle}>
    //         <input className={styles["toggle-state"]} type="checkbox" name="check" value="check"/>
    //         <div className={styles.indicator}></div>
    //       </div>
    //     </label>
    //   </form>
    //   <ul>
    //       <li>
    //         <button>
    //           hello
    //         </button>
    //       </li>
    //       <li>
    //         <button>
    //           hello
    //         </button>
    //       </li>
    //   </ul>
    // </>
  )
}

export default NavBar;
