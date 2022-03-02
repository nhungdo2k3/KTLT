import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className="canlender">
            <div className="canlender__month">
                {month}
            </div>
            <div className="canlender__year">
                {year}
            </div>
            <div className="canlender__date">
                {date}
            </div>
        </div>
    );
}

export default ExpenseDate;