import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'

import todoAction from '../redux/actions/index'



const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    button: {
        marginTop: theme.spacing(1),
    }
    },
  }));

export default function Form() {

    const classes = useStyles();
    const dispatch = useDispatch();


    
    const [title, setTitle] = useState('')
    const [descrip, setDescrip] = useState('')

    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescripChange = event => setDescrip(event.target.value);
    const handleSubmit = () => {

      dispatch(todoAction.addTodo({id: new Date().getTime(), title, descrip}))
      setDescrip('');
      setTitle('')
    }
    


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="title" label="Title" value={title} onChange={handleTitleChange} />        
        <TextField
          id="descrip"
          label="Description"
          multiline
          fullWidth
          margin="normal"
          value={descrip}
          onChange={handleDescripChange}
        />
           <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add
        </Button>
    
      </div>

      
          </form>  
        </div>
    )
}
