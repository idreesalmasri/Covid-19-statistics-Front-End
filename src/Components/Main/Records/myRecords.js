import axios from "axios"
import { useEffect, useState } from "react";
let savedRecords = [];
const MyRecords = (props) => {
    const [allRecords, setAllrecord] = useState()
    const retrieveRecords = async () => {
        const res = await axios.get('https://covid-19-statistics-back-end.onrender.com/getSavedrecords');
        savedRecords = res.data;
        setAllrecord(savedRecords)
    }
    useEffect(() => {
        if (props.activeTab === "My Records") {
            retrieveRecords();
        }
    }, [props.activeTab]);
    const deleteHandler = async (e) => {
        let id = e.target.value;
        const res = await axios.delete(`https://covid-19-statistics-back-end.onrender.com/deleteRecord/${id}`);
        console.log(res);
        retrieveRecords();
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 'auto',
            width: '1200px',
            flexWrap: "wrap",
            marginTop: "25px",
            marginBottom: '25px',
        }}>
            {
                allRecords && allRecords.length > 0 ?
                    allRecords ? allRecords.map((e, index) => {
                        return (

                            <div
                                className='card'
                                key={index}
                                style={{
                                    width: '235px',
                                    height: "150px",
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
                                <h3>Country : {e.country}</h3>
                                <p>Date : {e.date}</p>
                                <hr></hr>
                                <button onClick={e => deleteHandler(e)} value={e.record_id}>Delete</button>
                            </div>

                        )
                    }) : null : <h1 style={{ margin: 'auto' }}>No Available Records</h1>
            }
        </div>
    )
}
export default MyRecords;