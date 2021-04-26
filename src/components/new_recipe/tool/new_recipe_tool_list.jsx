import React, {useState, useEffect} from "react";
import axios from "axios";

function NewRecipeToolList (props) {


    const [tools, setTools] = useState([])

    useEffect(() => {
        if (props.newTool) {
            axios.get(`/tools/${props.newTool}`)
                .then(res => {
                    const newTool = {
                        toolId: props.newTool,
                        toolName: res.data.response.toolName, 
                    };
                    setTools(tools => [...tools, newTool])
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [props.newTool])

    return (
        <div>
            <h3>Added Tools:</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Tool Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map(item => (
                            <tr key={item.toolId}>
                                <td>{item.toolName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


export default NewRecipeToolList;