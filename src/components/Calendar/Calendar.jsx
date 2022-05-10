import React from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker } from '@mobiscroll/react';

const activities = [{
    date: '2022-04-26T00:00',
    move: 200,
    exercise: 360,
    stand: 180
}, {
    date: '2022-04-27T00:00',
    move: 360,
    exercise: 150,
    stand: 230
}, {
    date: '2022-04-28T00:00',
    move: 180,
    exercise: 200,
    stand: 280
}, {
    date: '2022-04-29T00:00',
    move: 120,
    exercise: 150,
    stand: 200
}, {
    date: '2022-04-30T00:00',
    move: 320,
    exercise: 180,
    stand: 100
}, {
    date: '2022-05-01T00:00',
    move: 120,
    exercise: 100,
    stand: 200
}, {
    date: '2022-05-02T00:00',
    move: 230,
    exercise: 170,
    stand: 330
}, {
    date: '2022-05-03T00:00',
    move: 320,
    exercise: 260,
    stand: 80
}, {
    date: '2022-05-04T00:00',
    move: 200,
    exercise: 140,
    stand: 180
}, {
    date: '2022-05-05T00:00',
    move: 360,
    exercise: 300,
    stand: 160
}, {
    date: '2022-05-06T00:00',
    move: 80,
    exercise: 360,
    stand: 360
}, {
    date: '2022-05-07T00:00',
    move: 220,
    exercise: 170,
    stand: 290
}, {
    date: '2022-05-08T00:00',
    move: 120,
    exercise: 40,
    stand: 100
}, {
    date: '2022-05-09T00:00',
    move: 120,
    exercise: 200,
    stand: 80
}];


const Calendar = () => {

    const getDeg = (nr) => {
        return {
            rotate1: nr > 180 ? 180 : nr,
            rotate2: nr > 180 ? nr - 180 : 0
        }
    }

    const getTransform = (rotate) => {
        return 'rotateZ(' + rotate + 'deg)';
    }
            
    const customDay = (args) => {
        const a = activities.find((obj) => { return + new Date(obj.date) === +args.date });
            
        return <div className="screen">
            <div className={a ? 'dial move' : ''}>
                <div className="dial-background" style={{background: a ? '#752a2a' : ''}}></div>
                <div className="dial-container container1">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.move).rotate1) : ''}}></div>
                </div>
                <div className="dial-container container2">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.move).rotate2) : ''}}></div>
                </div>
                <div className="marker start"></div>
                <div className="marker end" style={{transform: a ? getTransform(a.move) : ''}}></div>
            </div>        
            <div className={a ? 'dial exercise' : ''}>
                <div className="dial-background" style={{background: a ? '#4a6915' : ''}}></div>
                <div className="dial-container container1">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.exercise).rotate1) : ''}}></div>
                </div>
                <div className="dial-container container2">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.exercise).rotate2) : ''}}></div>
                </div>
                <div className="marker start"></div>
                <div className="marker end" style={{transform: a ? getTransform(a.exercise) : ''}}></div>
            </div>        
            <div className={a ? 'dial stand' : ''}>
                <div className="dial-background" style={{background: a ? '#157b76' : ''}}></div>
                <div className="dial-container container1">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.stand).rotate1) : ''}}></div>
                </div>
                <div className="dial-container container2">
                    <div className="wedge" style={{transform: a ? getTransform(getDeg(a.stand).rotate2) : ''}}></div>
                </div>
                <div className="marker start"></div>
                <div className="marker end" style={{transform: a ? getTransform(a.stand) : ''}}></div>
            </div> 
        </div>;
    }

    return (
        <Datepicker
            theme="ios" 
            themeVariant="light"
            controls={['calendar']}
            touchUi={true}
            display="inline"
            renderDayContent={customDay}
       />
    ); 
}

export default Calendar