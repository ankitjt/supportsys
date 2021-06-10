import React, { useState } from "react";
import "./MemberRoutes.css";

const Home = () => {
    const [checkInputs, setCheckInputs] = useState({
        issueSource: "",
        userType: "",
        userEmail: "",
        issueType: "",
        startTime: "",
        closeTime: "",
        toNic: "",
    });

    const fetchValue = e => {
        let val = e.target.value;
        let name = e.target.name;
        // setCheckInputs(e.target.value);
        setCheckInputs(prev => ({
            ...prev,
            [name]: val,
        }));
    };

    const submitForm = e => {
        e.preventDefault();
        if (checkInputs.issueSource === "") {
            alert("Issue Source cannot be blank");
        } else {
            let finalConfirm = window.confirm("Do you wish to submit??");
            if (finalConfirm) {
                console.log(checkInputs);
                setCheckInputs({
                    issueSource: "",
                    userType: "",
                    userEmail: "",
                    issueType: "",
                    startTime: "",
                    closeTime: "",
                    toNic: "",
                });
            }
        }
    };
    return (
        <div className='module-wrapper'>
            <div className='pills'>
                <span className='table-name'>Create record</span>
                <select
                    className='browser-default custom-select mt-3 mb-3 input-boxes create_issue_source'
                    id='select'
                    name='issueSource'
                    value={checkInputs.issueSource}
                    onChange={fetchValue}
                >
                    <option value='Issue Source'>Issue Source</option>
                    <option value='Mail'>Mail</option>
                    <option value='Call'>Call</option>
                </select>

                <select
                    className='browser-default custom-select mt-3 mb-3 input-boxes create_user_type'
                    id='select'
                    name='userType'
                    value={checkInputs.userType}
                    onChange={fetchValue}
                >
                    <option value='User Type'>User Type</option>
                    <option value='Department User'>Department User</option>
                    <option value='Vendor'>Vendor</option>
                </select>

                <div className='input-group input-group-sm mb-3 userEmail timeAndDate'>
                    <input
                        type='email'
                        className='form-control create-issue-email'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                        placeholder='Provide User email'
                        value={checkInputs.userEmail}
                        onChange={fetchValue}
                        name='userEmail'
                    />
                </div>

                <select
                    className='browser-default custom-select mt-3 mb-3 input-boxes create_issue_type'
                    id='select'
                    value={checkInputs.issueType}
                    onChange={fetchValue}
                    name='issueType'
                >
                    <option value='Issue Type'>Issue Type</option>
                    <option value='Java'>Java</option>
                    <option value='BoQ'>BoQ</option>
                    <option value='EMD'>EMD</option>
                    <option value='Bid Submission'>Bid Submission</option>
                    <option value='Tender Creation'>Tender Creation</option>
                    <option value='Tender Opening'>Tender Opening</option>
                    <option value='Reverse Auction'>Reverse Auction</option>
                    <option value='User Transfer'>User Transfer</option>
                    <option value='Account Block/Unblock'>Account Block/Unblock</option>
                    <option value='Admin Password Reset'>Admin Password Reset</option>
                </select>
                <div className='input-group input-group-sm mb-3 timeAndDate '>
                    <span className='input-group-text' id='inputGroup-sizing-sm'>
                        Start Time
                    </span>
                    <input
                        type='datetime-local'
                        className='form-control create_start_time'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                        value={checkInputs.startTime}
                        onChange={fetchValue}
                        name='startTime'
                    />
                </div>
                <div className='input-group input-group-sm mb-3 timeAndDate '>
                    <span className='input-group-text' id='inputGroup-sizing-sm'>
                        Close Time
                    </span>
                    <input
                        type='datetime-local'
                        className='form-control create_end_time'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                        name='closeTime'
                        value={checkInputs.closeTime}
                        onChange={fetchValue}
                    />
                </div>

                <select
                    className='browser-default custom-select mt-3 mb-3 input-boxes to_nic'
                    id='select'
                    name='toNic'
                    value={checkInputs.toNic}
                    onChange={fetchValue}
                >
                    <option value='Referred to NIC'>Referred to NIC</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>

                <input type='submit' value='Submit' className='custom-buttons create_issue_btn' onClick={submitForm} />
                {/* <ul className='upload-document-notes small day-count'></ul> */}
                <ul className='upload-document-notes small'>
                    <li>Go to Issues/Pending to update pending issues.</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
