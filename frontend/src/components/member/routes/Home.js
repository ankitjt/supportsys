import React from "react";
import "./MemberRoutes.css";

const Home = () => {
    return (
        <div className='module-wrapper'>
            <div class='pills'>
                <span class='table-name'>Create record</span>
                <select class='browser-default custom-select mt-3 mb-3 input-boxes create_issue_source' id='select'>
                    <option value='Issue Source' selected=''>
                        Issue Source
                    </option>
                    <option value='Mail'>Mail</option>
                    <option value='Call'>Call</option>
                </select>

                <select class='browser-default custom-select mt-3 mb-3 input-boxes create_user_type' id='select'>
                    <option value='User Type' selected=''>
                        User Type
                    </option>
                    <option value='Department User'>Department User</option>
                    <option value='Vendor'>Vendor</option>
                </select>

                <div class='input-group input-group-sm mb-3 userEmail timeAndDate'>
                    <input
                        type='email'
                        class='form-control create-issue-email'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                        placeholder='Provide User email'
                    />
                </div>

                <select class='browser-default custom-select mt-3 mb-3 input-boxes create_issue_type' id='select'>
                    <option value='Issue Type' selected=''>
                        Issue Type
                    </option>
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
                <div class='input-group input-group-sm mb-3 timeAndDate '>
                    <span class='input-group-text' id='inputGroup-sizing-sm'>
                        Start Time
                    </span>
                    <input
                        type='datetime-local'
                        class='form-control create_start_time'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                    />
                </div>
                <div class='input-group input-group-sm mb-3 timeAndDate '>
                    <span class='input-group-text' id='inputGroup-sizing-sm'>
                        Close Time
                    </span>
                    <input
                        type='datetime-local'
                        class='form-control create_end_time'
                        aria-label='Sizing example input'
                        aria-describedby='inputGroup-sizing-sm'
                    />
                </div>

                <select class='browser-default custom-select mt-3 mb-3 input-boxes to_nic' id='select'>
                    <option value='Referred to NIC' selected=''>
                        Referred to NIC
                    </option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>

                <input type='submit' value='Submit' class='custom-buttons create_issue_btn' />
                {/* <ul class='upload-document-notes small day-count'></ul> */}
                <ul class='upload-document-notes small'>
                    <li>Go to Issues/Pending to update pending issues.</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
