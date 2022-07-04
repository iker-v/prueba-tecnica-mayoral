import styles from "../styles/ChangeView.module.css"
import calculateColumns from "utils/calculateColumns"
import dynamic from "next/dynamic"
import { useEffect } from "react"

const ChangeView = ({setSelectView, setDevice}) => {
    
    const { plus, minus, device } = calculateColumns()

    useEffect(() => {
        console.log(device)
        setDevice(device)
    }, [])

    return (
        <div>
            <button type="button" onClick={setSelectView(minus)} className={styles.ChangeViewButton}>
                <svg className={styles.ChangeViewIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <button type="button" onClick={setSelectView(plus)} className={styles.ChangeViewButton}>
                <svg className={styles.ChangeViewIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    )
}

export default ChangeView