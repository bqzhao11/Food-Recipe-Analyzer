import React, {useState} from "react"
import axios from "axios"

function AdvFoodQuery() {
    const [queryResults, setQueryResults] = useState([]);

    const handleClick = e => {
        axios.get('/foods/adv-query')
             .then(res => {
                 if (res.data.success) {
                    setQueryResults(res.data.response);
                 }
             })
             .catch(err => {
                 console.log(err);
             })
    }

    return (
        <div>
            <button onClick={handleClick} value="Advanced Query" />
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Calories</th>
                        <th>Average Sugar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        queryResults.map(item => (
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.calories}</td>
                                <td>{item.avg_sugar}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdvFoodQuery;