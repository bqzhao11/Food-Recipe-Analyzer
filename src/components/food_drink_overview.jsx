import React, { useEffect, useState} from "react";
import axios from "axios";

function FoodDrinkOverview() {
    const [attributeName, setAttributeName] = useState('');
    const [upperBound, setUpperBound] = useState(0);
    const [lowerBound, setLowerBound] = useState(0);
    const [overviewResults, setOverviewResults] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        var temp = attributeName.toLowerCase()
        if (temp !== "calories"
         && temp !== "fat"
         && temp !== "protein"
         && temp !== "carbs"
         && temp !== "sugar") {
            alert("Please enter a valid attribute")
        }

        const req = {
            attributeName: attributeName,
            upperBound: upperBound,
            lowerBound: lowerBound
        }

        axios.get(`/overview/${attributeName}/${upperBound}/${lowerBound}`)
             .then(res => {
                 if(res.data.success) {
                     setOverviewResults(res.data.response)
                 }
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <h2>This is a overview page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Attribute: <input type='text'
                                      value={attributeName}
                                      onChange={e => setAttributeName(e.target.value)} />
                </label>
                <label>
                    Upper Bound: <input type='text'
                                        value={upperBound}
                                        onChange={e => setUpperBound(e.target.value)} />
                </label>
                <label>
                    Lower Bound: <input type='text'
                                        value={lowerBound}
                                        onChange={e => setLowerBound(e.target.value)} />
                </label>
                <input type='submit' value='Get overview' />
            </form>

            <table>
                <thread>
                    <tr>
                        <th>Type</th>
                        <th>Average Calories</th>
                        <th>Average Fat</th>
                        <th>Average Protein</th>
                        <th>Average Carbs</th>
                        <th>Average Sugar</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        overviewResults.map(item =>(
                            <tr key={item._name}>
                                <td>{item._name}</td>
                                <td>{item.avgCalories}</td>
                                <td>{item.avgFat}</td>
                                <td>{item.avgProtein}</td>
                                <td>{item.avgCarbs}</td>
                                <td>{item.avgSugar}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FoodDrinkOverview;