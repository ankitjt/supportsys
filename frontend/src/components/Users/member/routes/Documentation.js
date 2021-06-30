import React from "react";

const Documentation = () => {
    return (
        <div className='module-wrapper'>
            <div className='pills documents-listing'>
                <span className='table-name'>Uploaded documents list</span>
                <table className='table uploaded-document-table table-striped mt-2 small'>
                    <thead>
                        <tr>
                            <th scope='col'>Document Name</th>
                            <th scope='col'>Upload Time</th>
                        </tr>
                    </thead>
                    <tbody className='admin_doc_table_body'></tbody>
                </table>
                <ul className='upload-document-notes small'>
                    <li>To view the uploaded document click on the 'File Name'.</li>
                </ul>
            </div>
        </div>
    );
};

export default Documentation;
