import React, { useState } from 'react'

import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {   //1. aşamada input ve labelları oluşturuoyruz fonksiyonları tanımlıyorum 
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid input',
        meesage: 'Please enter a valid name and age (non-empty values).'
      });  
      return;
    }
    if(+enteredAge < 1){
      setError({
        title: 'Invalid age',
        meesage: 'Please enter a valid age (>0).'
      });  
        return;
    }
   
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  } 

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  };
  const errorHandler = () => {
    setError(null);
  }

//aşağıda Card componentine className isimli prop göndermiş olduk bu prop gidip card componentine class olarak yazılacak yani classes.input gdip orda kullanılacak
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.meesage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser