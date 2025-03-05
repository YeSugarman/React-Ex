// זה בעצם קובץ הרידקס, הוא מכיל את כל המידע המשותף שאנחנו רוצות לחלוק בין כולם
// הפונקציה מקבלת שתי פרמטרים:
// 1. פרמטר האתחול של רדקס (כמו ביוזסטיט)
// 2. הפעולה לביצוע שמורכבת
// type- שם הפעולה
// payload- פרמטרים שרוצים לשלוח

const appReducer = (prevStore=[],action) =>{
    // אילו פעולות הרידקס מבצעת
    switch(action.type){
        case "GET":
            return action.payload
        case "ADD":
            return [...prevStore,action.payload]// מוסיפה מכונית חדשה למערך
        case "DELETE":
            const item = prevStore.find((e)=>e.id===action.payload)
            if(item.status==="ADD")
                return prevStore.filter((e)=>e.id!==action.payload)
            return prevStore.map((e) =>
                e.id === action.payload ? { ...e, status: "DELETE" } : e
            ); // משנה סטטוס באיבר לנמחק
        case "ADDED":// משנה סטטוס שהוספתי עכשיו לפיירבייס
            return prevStore.map((e) =>
                e.id === action.payload ? { ...e, status: "EXITS" } : e
            );
        case "DELETED":
            return prevStore.filter((e)=>e.id!==action.payload)
        default:
            return prevStore
    }
}

export default appReducer