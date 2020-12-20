import React, { useState, useRef, useEffect } from 'react';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    counter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: '#fff',
        fontSize: '24px',
        border: '1px solid #fff',
        borderRadius: 4,
        backgroundColor: '#0f0f0f',
        fontFamily: 'Roboto'
    }
}));

const CountDown = () => {
    const classes = useStyles();
    
    const [date, setDate] = useState(() => {

        const localDate = localStorage.getItem('date')
        return localDate ? Moment(JSON.parse(localDate)): Moment().add(10, 'hours')
    })

    const [hours, setHours]         = useState('00')
    const [minutes, setMinutes]     = useState('00')
    const [seconds, setSeconds]     = useState('00')
        
    let interval = useRef();

    useEffect(() => {
        countDownStart();

        return clearInterval(interval.current)
    }, [date])

    const countDownStart = () => {

        interval = setInterval(() => {

            localStorage.setItem('date', JSON.stringify(date));


            const now       = Moment();
            const distance  = date - now;
            
            const hours     = Moment.duration(distance).hours();
            const minutes   = Moment.duration(distance).minutes();
            const seconds   = Moment.duration(distance).seconds();

            if(distance < 0){
                clearInterval(interval);
            } else {
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000)
    } 

    return(
        <div className={classes.counter}>
            <div>
                <p>{ hours }</p>
                <p>
                    <small>
                        Hours
                    </small>
                </p>
            </div>
            <div>
                <p>{ minutes }</p>
                <p>
                    <small>
                        Minutes
                    </small>
                </p>
            </div>
            <div>
                <p>{ seconds }</p>
                <p>
                    <small>
                        Seconds
                    </small>
                </p>
            </div>
        </div>
    )
}

export default CountDown;