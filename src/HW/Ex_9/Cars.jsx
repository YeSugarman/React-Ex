import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from './firebase'
import { useDispatch, useSelector } from 'react-redux'

export default function Cars() {
const dispatch = useDispatch()// מפעיל את הרידקס
const cars = useSelector((store)=>store)// מאזין לרידקס
const col = collection(db,"Cars")// מקבל מצביע לאיזה טבלת נתונים לגשת

const [model,setModel]=useState("")
const [color,setColor]=useState("")
const [year,setYear]=useState(0)
const [id,setId]=useState(0)

const saveChangesFirebase = async () => {
   for (const element in cars){
    
    if(cars[element].status=="ADD")
        {
            // מוסיף את האיבר לפיירבייס
            await addDoc(col,{Model:cars[element].Model,Color:cars[element].Color,Year:cars[element].Year})
            // משנה את הסטטוס לקיים ברידקס
            const action = {type:"ADDED",payload:cars[element].id}
            dispatch(action)// מפעיל רידקס לשנות סטטוס על האיבר לקיים
        }
        else
        if(cars[element].status=="DELETE")
        {
            // מוחק את האיבר מפיירבייס
            const docToDelete = doc(db,"Cars",cars[element].id)
            await deleteDoc(docToDelete)
            // מוחק גם כן את האיבר השמור ברידקס
            const action = {type:"DELETED",payload:cars[element].id}
            dispatch(action)// מפעיל רידקס למחוק את האיבר מהמערך
        }

    };
};


const addCarRedux = () =>{
    setId(id+1)
    const action = {type:"ADD",payload:{id:id,status:"ADD",Model:model,Color:color,Year:year}}
    dispatch(action)// מפעיל
}

const deleteCarRedux = (id) =>{
    const action = {type:"DELETE",payload:id}
    dispatch(action)// מפעיל
}

const getAllCars = () =>{

    //firebase
    const q = query(col)// מקבל ניתוב מהשרת
    onSnapshot(q,(snapshot)=>{
        // ניגש למערך שמכיל את כל הדאטה
        const arrData = snapshot.docs.map((doc)=>{
            return {id:doc.id,status:"EXIST", ...doc.data()}
        })
        
        //redux
        const action = {type:"GET",payload:arrData}
        dispatch(action)//קורא לרידקס
    })
}

// מקבל את כל המכוניות מפיירבייס ושומר את כולם ברידקס
useEffect(()=>{getAllCars()},[])

  return (
    <div>
        {cars.length > 0 ? (cars.filter((car)=>(car.status=="EXIST" || car.status=="ADD"))
        .map((car)=>(<div key={car.id}>Model: {car.Model}, Year: {car.Year}, Color: {car.Color} <button onClick={()=>{deleteCarRedux(car.id)}}>Delete Car</button></div>))):"no cars"}
        <br/>
        <h3>Add Car</h3>
        Model: <input onChange={(e)=>{setModel(e.target.value)}} type="text"/><br />
        Color: <input onChange={(e)=>{setColor(e.target.value)}} type="text"/><br />
        Year: <input onChange={(e)=>{setYear(e.target.value)}} type="number"/><br />
        <button onClick={addCarRedux}>Add Car</button>
        <br />
        <br />
        <button onClick={saveChangesFirebase}>Save Changes</button>

    </div>
  )
}
