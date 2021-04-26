import React, {useState} from "react"
import axios from "axios"

function AdvancedDrinkQuery() {
    const [queryResults, setQueryResults] = useState([]);

    const handleClick = e => {
        axios.get('/drinks/advanced-query')
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
                        <th>Food or Drink</th>
                        <th>Carbs</th>
                        <th>Average Protein </th>
                        <th>Average Fat </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        queryResults.map(item => (
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.carbs}</td>
                                <td>{item.avgPro}</td>
                                <td>{item.avgfat}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdvancedDrinkQuery;




