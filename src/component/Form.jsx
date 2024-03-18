import React from 'react'
import "./Form.css"
const Form = () => {
    return (
        <div className="form-wrap">
            <div className="cal-heading">
                <div className="calculator"> </div>
                <h3>Lucknow Construction Cost Estimator</h3>

            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="float-input">Plot Area:</label>
                    <input type="text" id="float-input" name="float-input" placeholder="Enter area in square feet" />
                </div>

                <div className="form-group">
                    <label for="option-select">floors</label>
                    <div className="select-wrapper">
                        <select id="option-select" name="option">
                            <option value="option1">Ground Floor</option>
                            <option value="option2">floor +1</option>
                            <option value="option3">floor +2</option>
                            <option value="option3">floor +3</option>
                        </select>
                    </div>
                </div>

                <div className='btn-div'> <button className='btn' type="submit">ESTIMATE NOW</button></div>
            </form>
        </div>
    )
}

export default Form