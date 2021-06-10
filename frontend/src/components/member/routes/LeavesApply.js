import React from "react";
import "./MemberRoutes.css";

const LeavesApply = () => {
    return (
        <div className='module-wrapper'>
            <div className='pills'>
                <span className='table-name'>Leave Request</span>
                <div className='form-group member-leave-textarea'>
                    <textarea
                        className='form-control leave-details'
                        id='exampleFormControlTextarea1'
                        rows='3'
                        placeholder='Reason for leave...'
                    ></textarea>
                </div>
                <div className='input-group input-group-sm mb-3 timeAndDate '>
                    <span className='input-group-text' id='inputGroup-sizing-sm'>
                        From
                    </span>
                    <input
                        type='date'
                        className='form-control leave-start-date'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                    />
                </div>
                <div className='input-group input-group-sm mb-3 timeAndDate '>
                    <span className='input-group-text' id='inputGroup-sizing-sm'>
                        Till
                    </span>
                    <input
                        type='date'
                        className='form-control leave-end-date'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                    />
                </div>

                <input type='submit' value='Request' className='custom-buttons raise-request' />
                <ul className='upload-document-notes small'>
                    <li>All fields are mandatory.</li>
                </ul>
            </div>
        </div>
    );
};

export default LeavesApply;
