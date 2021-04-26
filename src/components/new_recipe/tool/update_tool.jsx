import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateTool (props) {
    const [toolName, setToolName] = useState('');

    useEffect(() => {
        axios.get(`/tools/${props.toolId}`)
             .then(res => {
                 if (res.data.success) {
                     setToolName(res.data.response.toolName);
                 }
             })
    }, []);

    const handleSubmit = e => {

        const req = {
            tool_name: toolName,
        }

        axios.post(`tools/update/${props.toolId}`, req)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });

        props.turnOffUpdate();
        props.handleSubmit(e);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Tool Name: <input type='text' 
                                      value={toolName} 
                                      onChange={e => setToolName(e.target.value)} 
                                      placeholder="Tool Name" />
                </label><br />
                
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateTool;