import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { useSelector, useDispatch } from 'react-redux'
import { getThemeProps } from '@material-ui/styles';
import todoAction from '../redux/actions/index'





const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    }, 
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


export default function ListComp() {
    const classes = useStyles();

    const dispatch = useDispatch()

    const list = useSelector(state => state.todo)
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [descrip, setDescrip] = useState('')
    const [id, setId] = useState('')

    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescripChange = event => setDescrip(event.target.value);
    


  const handleOpen = (id, title, descrip) => {
    setOpen(true);
    setTitle(title);
    setDescrip(descrip)
    setId(id)

  } 
    


  const handleClose = () => setOpen(false);
    
  
    const handleDelete = id => dispatch(todoAction.deleteTodo({id}))
    const handleEdit = (id, title, descrip) => {
      dispatch(todoAction.editTodo({id, title, descrip}))
      setOpen(false)
      setDescrip('');
      setTitle('')
    }


    
    
     
      
      
    return (
        <div>
            <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
           ToDo List
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {list &&  list.todo.map(value => {
                  return  <ListItem key={value.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.title ? value.title : null}
                    secondary={value.descrip ? value.descrip : null}
                  />
                   
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(value.id, value.title, value.descrip)}  color='primary'>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(value.id)} >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>

                 

                </ListItem>
              })}
               
              
            </List>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="title" label="Title" value={title} onChange={handleTitleChange} />        
        <TextField
          id="standard-full-width"
          label="Description"
          multiline
          fullWidth
          margin="normal"
          value={descrip}
          onChange={handleDescripChange}
        />
           <Button variant="contained" color="primary" onClick={() => handleEdit(id, title, descrip)}>
              Edit
        </Button>
    
      </div>

      
          </form> 
         
          </div>
        </Fade>
      </Modal>
          </div>
        </Grid>
        </div>
    )
}
