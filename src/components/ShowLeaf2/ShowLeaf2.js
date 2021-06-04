import React from 'react';
import moment from 'moment'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import { useState, useEffect } from 'react';
import Countdown2 from '../Countdown2/Countdown2'

const useStyles = makeStyles({
    list: {
        width: 400,
        backgroundColor: '#add8e6',
        height: '100vh'
    },
    fullList: {
        width: 'auto',
        backgroundColor: '#add8e6'
    },

});

export default function ShowLeaf2(props) {

    const [date, setDate] = useState(props.created)

    const [day, setDay] = useState()


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

        dateNow.setDate(parseInt(day) + numberOfDaysToAdd - 1);

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



    // console.log(nextDate)



    // convert idx into true or false
    function convert(num) {
        let result = num % 2 === 0 ? 0 : 1
        return result
    }

    let number = convert(props.idx)
    let LEAF_STYLE = `leaf${number}`



    // material UI stuff
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            styles={{ backgroundColor: '#add8e6' }}
        >
            {/* what is being shown in the drawer */}
            <List>
                <div className="Show" >

                    <h1>{props.name}</h1>
                    <p>Needs a drink every {props.schedule} days</p>
                    <Countdown2
                        schedule={props.schedule}
                        today={today}
                        nextDate={nextDate}
                        handleUpdate={props.handleUpdate}
                        plantId={props.plantId}

                    />

                    <div className="Trash" onClick={() => props.handleDelete(props.plantId)}>DELETE</div>


                    {/* <div onClick={() => props.handleUpdate(props.plantId)} className="Trash" >Water Buddy</div> */}
                </div>
            </List>
        </div >
    );

    return (
        <div onClick={() => props.handleEdit(props.plantId)}>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <div onClick={toggleDrawer(anchor, true)} className={LEAF_STYLE} style={moment(today).isSameOrAfter(nextDate) ? { backgroundColor: '#e6ba8e' } : { backgroundColor: 'rgb(180,210,140)' }}> {props.name}</div>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}


        </div>


    );
}