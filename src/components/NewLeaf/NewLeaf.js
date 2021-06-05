import styles from './NewLeaf.module.css'
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios'


import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#add8e6'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function NewLeaf(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'jyeocx7t')

        Axios.post(
            "https://api.cloudinary.com/v1_1/dyaerfbes/image/upload",
            formData
        ).then((res) => {
            console.log(res)
        })
    };



    return (
        <div className={classes.root}>

            <div className={styles.addCntr}>
                <div className={styles.add}>
                    <div className={styles.drop}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                        >
                            <div className={styles.plus}>
                                <AddIcon />
                            </div>
                        </IconButton>
                    </div>
                </div>
            </div>


            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>

                <List>
                    <div>

                        {/* Change this from form to div with submit button */}
                        <div className={styles.input} autocomplete="off">
                            <h1 style={{ marginBottom: '30px' }}>New Buddy!</h1>
                            <p> What's your buddies name?</p>
                            <input value={props.leaf.newBuddy.name} name="name" placeholder="Enter Name" onChange={props.handleChange} />

                            <p> How often does your buddy nead a drink?</p>
                            <input value={props.leaf.newBuddy.schedule} name="schedule" placeholder="days" className={styles.days} onChange={props.handleChange} />

                            {/* Image Feat */}

                            <p> What does your buddy look like?</p>
                            <input type="file" onChange={(e) => {
                                setImageSelected(e.target.files[0])
                            }}></input>
                            <button onClick={uploadImage}>Upload Image</button>
                            <div onClick={props.handleSubmit}>

                                <button onClick={handleDrawerClose}>submit</button>
                            </div>
                        </div>
                    </div>
                </List>


            </Drawer>
        </div >
    );
}


// function NewLeaf(props) {
//     return (
//         <div className={styles.input}>
//             <form onSubmit={props.handleSubmit}>
//                 <label>
//                     <input value={props.leaf.newBuddy.name} name="name" placeholder="Enter Name" onChange={props.handleChange} />
//                     <input value={props.leaf.newBuddy.schedule} name="schedule" placeholder="days" className={styles.days} onChange={props.handleChange} />
//                 </label>
//                 <button>submit</button>
//             </form>
//         </div>


//     )
// }

// export default NewLeaf;