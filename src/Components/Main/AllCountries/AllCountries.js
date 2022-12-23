import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';

const AllCountries = (props) => {
    const [contriesData, setCountriesData] = useState();
    const retrieveData = async () => {
        try {
            const response = await axios.get(`https://api.covid19api.com/summary
            `);
            const retrevedData = await response.data["Countries"];
            setCountriesData(retrevedData);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        if (props.activeTab === "All Countries") {
            retrieveData();
        }
    }, [props.activeTab]);

    const addToMyRecords = async (e) => {
        let id = e.target.value;
        const specific = await contriesData.filter(e => e.ID === id);
        const res = await axios({
            method: 'post',
            url: `https://covid-19-statistics-back-end.onrender.com/addRecord`,
            data: specific[0],
        })
        swal("Saved",'' ,"success");
        console.log(res);

    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 'auto',
                width: '1200px',
                flexWrap: "wrap",
                marginTop: "25px",
                marginBottom: '25px',
            }}
        >
            {
                contriesData ? contriesData.map((e, index) => {
                    return (
                        <div
                            className='card'
                            key={index}
                            style={{
                                width: '235px',
                                height: "250px",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,1)",
                                transition: "0.3s",
                                padding: '2px 14px',
                                backgroundColor: "#008b8b",
                                marginTop: "15px",
                                marginBottom: "35px",
                                textAlign: "center",
                                color: 'black',
                                fontWeight: "700"
                            }}
                        >
                            <h3>Country : {e.Country}</h3>
                            <p>Total Confirmed Cases : {e.TotalConfirmed}</p>
                            <p>Total Deaths Cases : {e.TotalDeaths}</p>
                            <p>Total Recovered Cases : {e.TotalRecovered}</p>
                            <p>Date : {e.Date}</p>
                            <hr></hr>
                            <button onClick={e => addToMyRecords(e)} value={e.ID} style={{ backgroundColor: '#696969' }}>Add to my records</button>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}
export default AllCountries;