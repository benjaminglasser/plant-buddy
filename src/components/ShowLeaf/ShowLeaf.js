import './ShowLeaf.css'
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Countdown2 from '../Countdown2/Countdown2'
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

export default function ShowLeaf(props) {

    // convert idx into true or false
    function convert(num) {
        let result = num % 2 === 0 ? 0 : 1
        return result
    }

    let number = convert(props.idx)
    let LEAF_STYLE = `leaf${number}`

    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} >

            <div className="addCntr" >
                <div className="add" >
                    <div
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className="ShowBtn"
                    >
                        <div className={LEAF_STYLE} >{props.name}</div>

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
                    <div className="Show">
                        <h1>{props.name}</h1>
                        <p>Needs to drink every {props.schedule} days</p>
                        <Countdown2 schedule={props.schedule} />
                        <div onClick={handleDrawerClose}>
                            <div className="Trash" onClick={() => props.handleDelete(props.plantId)}>DELETE</div>
                        </div>
                    </div>
                </List>


            </Drawer>
        </div >
    );
}