import React from 'react'
import "./Formpain.css"
import { useState } from 'react';

const Formpain = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle changes in the selected radio button
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    return (
        <div className="painting-form" style={{ borderRadius: 9 }}>

            <div className="painting-heading" style={{ margin: 10, gap: 10 }}>
                <div className="calculator"></div>
                <h3>Estimate Your Painting Cost</h3>

            </div>
            <form>
                <div className="form-group" style={{ margin: 10 }}>
                    <label htmlFor="option-select" style={{ fontWeight: 700, fontSize: 12 }}>Select City</label>
                    <div>
                        <select name="option" id="option-select">    <option value="option1">Lucknow</option>
                        </select>
                    </div>
                </div>
                <div className='flex' style={{ margin: 10, gap: 20 }}>

                    < div>
                        <label>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                            />
                            fresh painting
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                            />
                            re-painting
                        </label>
                    </div>
                </div>
                <div className='form-group' style={{ margin: 10 }}>
                    <label htmlFor="text" style={{ fontSize: 12, fontWeight: 700 }}>Buildup Area</label>
                    <div>
                        <input type="text" id="area-input" name="area-input" placeholder="Enter area in square feet" />
                    </div>
                </div>


                <div className='pain-btn'> <button type="submit">ESTIMATE NOW</button></div>
            </form>
        </div>
    )
}

export default Formpain