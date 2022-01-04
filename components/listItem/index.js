import React from 'react';
import { useDispatch } from "react-redux";
import { todoSelector, toggleStatusAction, deleteTodoAction } from "../../store/slices/todoSlice";
import SecondaryButton from '../form/Button/SecondaryButton';
import styles from './listItem.module.css';

const ListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles['list-container']}>
      <div onClick={() => dispatch(toggleStatusAction(index))} className={`${styles.listItem} ${item.status ? 'bg-green-900' : "bg-red-800"}`}></div>
      {
        item.text
      }

      <SecondaryButton
        onClick={(e) => dispatch(deleteTodoAction(index))}
      >
        Delete
      </SecondaryButton>
    </div>
  )
}

export default ListItem;