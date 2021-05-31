import moment from 'moment'
import './ShowLeaf.css'
import React from 'react';
import { useState, useEffect } from 'react'
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
    // created at timestamp
    const [date, setDate] = useState(props.created)

    const [day, setDay] = useState()

    // console.log(date, props.name);

    // let created = date.split('-')[2]
    // let day = created.split('T')[0]

    // console.log(day)


    // convert timestamp into similar format

    // helper function to figure out next date from now
    useEffect(() => {
        let created = date.split('-')[2]
        let day = created.split('T')[0]
        setDay(day)
    }, [date])


    function newDate(numDays) {

        // let day = '33';
        const dateNow = new Date();
        let numberOfDaysToAdd = numDays;

        dateNow.setDate(parseInt(day) + numberOfDaysToAdd);

        let mm = dateNow.getMonth() + 1;
        let dd = dateNow.getDate();
        let y = dateNow.getFullYear();

        let formattedDate = `${mm}/${dd}/${y}`;
        return formattedDate;

    }

    function todaysDate() {
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        return date
    }


    // main calculate function
    const calculateTimeLeft = () => {

        //calculates the future date
        let getFutureDate = newDate(props.schedule);
        return getFutureDate;

    }



    const [nextDate, setNextDate] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setNextDate(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer);

    })

    let today = todaysDate()







    // convert idx into true or false
    function convert(num) {
        let result = num % 2 === 0 ? 0 : 1
        return result
    }

    let number = convert(props.idx)
    let LEAF_STYLE = `leaf${number}`

    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div  >

            <div
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className="ShowBtn"
            >
                <div className={LEAF_STYLE} style={moment(today).isSameOrAfter(nextDate) ? { backgroundColor: '#e6ba8e' } : { backgroundColor: 'rgb(180,210,140)' }}> {props.name}</div>

            </div>




            <Drawer
                className={classes.drawer}

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
                        <p>Needs a drink every {props.schedule} days</p>
                        <Countdown2
                            schedule={props.schedule}
                            today={today}
                            nextDate={nextDate}
                            handleUpdate={props.handleUpdate}
                            plantId={props.plantId}

                        />
                        <div onClick={handleDrawerClose}>
                            <div className="Trash" onClick={() => props.handleDelete(props.plantId)}>DELETE</div>
                        </div>

                        <div onClick={() => props.handleUpdate(props.plantId)} className="Trash" >Water Buddy</div>
                    </div>
                </List>


            </Drawer>
        </div >
    );
}