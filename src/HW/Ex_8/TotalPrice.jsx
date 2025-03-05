// מאזין לרידקס

import React from 'react'
import { useSelector } from 'react-redux'

export default function TotalPrice() {
    // מורה באלו מצבים אני רוצה להאזין לרידקס, במקרה זה בכל שינוי כי יש לי שם רק פרמטר אחד
    const products = useSelector((store)=>store)

  return (
    <div style={{border:"1px solid red"}}>
        {/* הפרמטר הראשון זה משתנה שצובר לתוכו את סכום המערך הזמני, הפרמטר השני זה האיבר שכל פעם מוסיפים */}
        {/* ה0 האתחול של המצבר */}
        Total Price:{products.length>0?( products.reduce((accumulator,currentValue)=>accumulator+Number(currentValue.price),0)):0}
    </div>
  )
}
