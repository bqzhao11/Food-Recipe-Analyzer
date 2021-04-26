import React, { useState } from "react";
import axios from "axios";
import DeleteToolButton from "./delete_tool_button";
import UpdateToolButton from "./update_tool_button";
import AddToolButton from "./add_tool_button";
import UpdateTool from "./update_tool";


function GetTool (props) {

    const [toolName, setToolName] = useState('');
    const [toolResults, setToolResults] = useState([]);
    const [displayUpdate, setDisplayUpdate] = useState(false);
    const [updateToolId, setUpdateToolId] = useState();

    const turnOnUpdate = toolId => {
        setUpdateToolId(toolId);
        setDisplayUpdate(true);
    }

    const turnOffUpdate = () => {
        setDisplayUpdate(false);
    }


    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`/tools/name/${toolName}`)
             .then(res => {
                if (res.data.success) {
                    setToolResults(res.data.response)
                }

             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <h4>Add Tools:</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Tool Name: <input type='text'
                                      value={toolName}
                                      onChange={e => setToolName(e.target.value)} />
                </label><br />
                <input type='submit' value='Find Tool' />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Tool Name</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toolResults.map(item => (
                            <tr key={item.toolId}>
                                <td>{item.toolName}</td>
                                <td><div onClick={handleSubmit} ><DeleteToolButton toolId={item.toolId} /></div></td>
                                <td><UpdateToolButton toolId={item.toolId} turnOnUpdate={turnOnUpdate}  /></td>
                                <td><AddToolButton toolId={item.toolId} handleAddTool={props.handleAddTool} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {displayUpdate && (<UpdateTool toolId={updateToolId} turnOffUpdate={turnOffUpdate} handleSubmit={handleSubmit} />)}
        </div>
    )
}


export default GetTool;