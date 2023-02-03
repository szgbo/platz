import React, { Fragment, useState } from 'react';
import styles from '../styles/NavBar.module.css'
import cx from 'classnames';


interface Item {
  text: string,
  active: boolean,
}

const initItems = [{
  text: 'Home',
  active: true,
}, {
  text: 'Features',
  active: false,
}, {
  text: 'Tutorial',
  active: false,
}] 

const NavBar = () => {
  const [items, setItems] = useState<Item[]>(initItems);


  function changeActiveItem( i: number ) {
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
    <div className={styles["nav-container"]}>
    {
      items.map((item, i) => (
        <div
          // className={ styles[`nav-item item-${i} ${item.active ? 'active' : ''}`] }
          className={ cx(
            styles['nav-item'],
            styles[`item-${i}`],
            styles[item.active ? 'active' : ''],
          ) }
          key={ item.text }
          onClick={ () => changeActiveItem(i) }
        >
          { renderItem(item) }
        </div>
      ))
    }
    <div className={styles["nav-item-highlighter"]} />
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
