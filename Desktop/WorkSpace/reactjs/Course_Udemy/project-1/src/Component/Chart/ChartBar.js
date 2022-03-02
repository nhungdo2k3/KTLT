import React from "react";

import './ChartBar.css'

const ChartBar = (props) => {
    let heightChartBarFill = '0%'
    if(props.totalValue > 0) {
        heightChartBarFill = Math.round((props.value / props.totalValue) * 100) + '%'; 
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: heightChartBarFill}}></div>
            </div>
            <div className='chart-bar__label'>{props.month}</div>
        </div>
    )
}

export default ChartBar;