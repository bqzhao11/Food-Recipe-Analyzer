import React, {useState} from "react"
import axios from "axios"

function RunAdv() {

    const [advResults, setAdvResults] = useState([]);


    const handleHealthyFood = (evt) => {
        axios.get(`/recipe/search_healthy`)
            .then(res => {
                if (res.data.success) {
                    setAdvResults(res.data.response)
                }

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
                <h4>Can't Decide? Press The Button To See 15 Random Selection Of Healthy Foods</h4>
                <button onClick={handleHealthyFood} value="Search!" />
            <table>
                <thead>
                    <tr>
                        <th>Food/Drink Names</th>
                        <th>Calories</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Protein</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        advResults.map(item => (
                            <tr>
                                <td>{item.names}</td>
                                <td>{item.calories}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.protein}</td>
                                <td>{item.fat}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default RunAdv;