import React from "react";

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    return (
        <div className='expense-chart'>
            <div className='chart'>
                {props.dataPoints.map(dataPoint => 
                    <ChartBar 
                        key={dataPoint.month}
                        month={dataPoint.month}
                        value={dataPoint.value}
                        totalValue={props.totalPrice}
                    />
                )}
            </div>
            <div className='total-price'><b>Total price:</b> ${props.totalPrice}</div>
        </div>
    );
}

export default Chart;