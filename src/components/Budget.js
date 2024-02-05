import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const handleBudgetChange = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);
        if(val<totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending"); 
        }
        else if (val>20000){
            alert("The budget cannot exceed 20,000");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }   
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onInput={(event)=>handleBudgetChange(event.target.value)}></input>
</div>
    );
};
export default Budget;