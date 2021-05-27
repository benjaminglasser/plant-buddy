import styles from './NewLeaf.module.css'
import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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

    return (
        <div className={classes.root}>

            <div className={styles.addCntr}>
                <div className={styles.add}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <AddIcon />
                    </IconButton>
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
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <div className={styles.input}>
                        <form onSubmit={props.handleSubmit}>
                            <label>
                                <input value={props.leaf.newBuddy.name} name="name" placeholder="Enter Name" onChange={props.handleChange} />
                                <input value={props.leaf.newBuddy.schedule} name="schedule" placeholder="days" className={styles.days} onChange={props.handleChange} />
                            </label>
                            <button>submit</button>
                        </form>
                    </div>
                </List>
                <Divider />

            </Drawer>
        </div>
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