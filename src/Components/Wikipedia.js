import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import "../Components/Wikipedia.css"

function Wikipedia() {

    const [term, setTerm] = useState("");
    const [receivedData, setReceivedData] = useState([]);

    useEffect(() => {

        const search = async () => {

            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            setReceivedData(response.data.query.search)
        }
        const timeId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500)
        return () => {
            clearTimeout(timeId)
        }

    }, [term]);

    function searchValue(event) {
        const value = event.target.value;
        setTerm(value);
    }

    console.log(receivedData);

    return (
        <div className="search_container">
            <label className="ui label" style={{ marginBottom: "10px" }}>Enter Search Term</label>
            <input value={term} onChange={searchValue} className="search_bar" type="text" placeholder="Search here..."></input>
            {receivedData.map(item => {
                return (<List
                    key={item.pageid}
                    id={item.pageid}
                    title={item.title}
                    description={item.snippet}
                />)
            })}
        </div>
    )
}
export default Wikipedia
