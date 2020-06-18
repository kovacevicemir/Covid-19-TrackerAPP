import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setfetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries(await fetchCountries())
        }

        fetchAPI()
    },[])

    return (
        <div>
            <FormControl className="styles.formControl">
                <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option val="global">Global</option>
                        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
