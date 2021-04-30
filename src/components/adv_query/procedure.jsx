import React, {useState} from "react"
import axios from "axios"

function RunProcedure() {

    const [advResults, setAdvResults] = useState([]);


    const handleadvise = (evt) => {
        axios.get(`/procedure`)
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
            <h4> Want Some Advise? Click the button to see some healthy and unhealthy food </h4>
            <button onClick={handleadvise} value="Button!" />
            <table>
                <thead>
                    <tr>
                        <th>Food Names</th>
                        <th>Calories</th>
                        <th>Sugar</th>
                        <th>Review</th>
                        <th>avgSugar</th>
                        <th>avgProtein</th>
                        <th>avgFat</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        advResults.map(item => (
                            <tr>
                                <td>{item.foodName}</td>
                                <td>{item.calories}</td>
                                <td>{item.sugars}</td>
                                <td>{item.review}</td>
                                <td>{item.avgSugar}</td>
                                <td>{item.avgProtein}</td>
                                <td>{item.avgFat}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RunProcedure;