import React from "react"
const Meet = React.createContext({})
export default ({children}:{children: React.ReactNode})=>{
    const [meet, setMeet] = React.useState(null)
    const [lecturer, setLecturer] = React.useState(null)
    return (
        <Meet.Provider value={{
            meet, setMeet, lecturer, setLecturer
        }}>
            {children}
        </Meet.Provider>

    )
}
const MeetState  = React.useContext(Meet)