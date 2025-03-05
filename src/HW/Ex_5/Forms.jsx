import React from 'react'
import CompGetData from '../Ex_4/Ex_1/Utils/CompGetData'

export default function Forms() {

    // פונקציה המבצעת קריאה לשרת לשליחת הקובץ
    const handleSubmit = (e) =>{
        // לבטל התנהגות דיפולטיבית של הפונקציה לרענן את העמוד
        e.preventDefault()
        console.log("submit");
        
    } 

 return (
    <div>
        <CompGetData/>

        <form onSubmit={handleSubmit}>
            Name: <input type="text"/> <br />
            Mail: <input type="text"/> <br />

            {/* סוג זה כשלוחצים על הכפתור הוא נשלח לכתובת השרת */}
            <button type="submit">Update</button>
        </form>
    </div>
  )
}
