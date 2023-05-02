import React, {useState, useEffect} from 'react'
import '../../styles/clock.css';

const Clock = () => {

    // Declare states to hold the values for days, hours, minutes, and seconds
const [days, setDays] = useState()
const [hours, setHours] = useState()
const [minutes, setMinutes] = useState()
const [seconds, setSeconds] = useState()

// Declare a variable to hold the setInterval
let interval;

// Define a function to calculate the countdown
const countDown = () => {

    // Set the destination date
    const destination = new Date ('Oct 10, 2023').getTime()

    // Set the interval to run the countdown every second
    interval = setInterval(()=> {

        // Get the current time
        const now = new Date().getTime()

        // Calculate the time difference between the destination and current time
        const different = destination - now

        // Calculate the days, hours, minutes, and seconds
        const days = Math.floor(different / (1000 * 60 * 60 * 24))

        const hours = Math.floor(different % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60))

        const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))

        const seconds = Math.floor(different % (1000 *60)/ (1000))

        // If the countdown reaches zero, clear the interval
        if(destination < 0) clearInterval(interval.current)
        else {

            // Set the states for days, hours, minutes, and seconds
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)       
        }
    });
};

// Set up the useEffect hook to run the countdown function once
useEffect(()=>{
    countDown()
})

// Return the JSX to display the countdown clock
return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'> {days}</h1>
                <h5 className='text-white fs-6'> Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'> {hours}</h1>
                <h5 className='text-white fs-6'> Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                 <h5 className='text-white fs-6'> Minutes</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock-data d-flex align-items-center gap-5'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'> {seconds}</h1>
                 <h5 className='text-white fs-6'> Seconds</h5>
            </div>
        </div>
    </div>
)
}

export default Clock