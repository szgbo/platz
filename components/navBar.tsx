import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '../styles/NavBar.module.css'
import cx from 'classnames';
import { useRouter } from 'next/router';

interface Item {
  text: string,
  active: boolean,
}

const initItems = [{
  text: 'home',
  active: false,
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

export const navBarPosition = [0,-300];

const NavBar = () => {
  const [items, setItems] = useState<Item[]>(initItems);
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    const path = pathname.split('/')[1];
    const index = initItems.findIndex(item => (item.text === path || (item.text === 'home' && path === '')));
    changeActiveItem(index);
  }, []);

  useEffect(() => {
    const { pathname } = router;
    const path = pathname.split('/')[1];
    const index = initItems.findIndex(item => (item.text === path || (item.text === 'home' && path === '')));
    changeActiveItem(index);
  }, [router.pathname]);

  function changeActiveItem( i: number ) {
    const highlight = document.querySelector("#nav-item-highlighter") as HTMLElement;
    const item = document.querySelector(`#item-${i}`) as HTMLElement;
    const container = document.querySelector("#nav-container") as HTMLElement;
    if (highlight && item && container) {
      // use item offset and highlight offset and container offset to calculate the position of the highlighter
      const highlightOffset = highlight.offsetWidth / 2;
      const itemOffset = item.offsetLeft + item.offsetWidth / 2;
      const position = itemOffset - highlightOffset;
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
          <Link
            // className={ styles[`nav-item item-${i} ${item.active ? 'active' : ''}`] }
            href={item.text === "home" ? "/" : "/" + item.text}
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
          </Link>
        // </Link>
      ))
    }
    <div className={styles["nav-item-highlighter"]} id={"nav-item-highlighter"}/>
  </div>
  )
}

export default NavBar;
