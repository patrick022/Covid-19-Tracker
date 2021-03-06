import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, active, isRed, isGrey, total, ...props }) {
    return (
       <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isGrey && 'infoBox--grey'}`}>
           <CardContent>
               {/* title */}
               <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
               
               {/* Number of cases */}
               <h2 className="infoBox__cases">{cases}</h2>
               
               {/* 1.2M Total */}
               <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
           </CardContent>
       </Card>
    )
}

export default InfoBox
