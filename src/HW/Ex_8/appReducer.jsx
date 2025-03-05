// זה בעצם קובץ הרידקס, הוא מכיל את כל המידע המשותף שאנחנו רוצות לחלוק בין כולם
// הפונקציה מקבלת שתי פרמטרים:
// 1. פרמטר האתחול של רדקס (כמו ביוזסטיט)
// 2. הפעולה לביצוע שמורכבת מ-מחרוזת של שם הפעולה, ופרמטרים שרוצים לשלוח


// ברידקס שמור לנו מערך מוצרים
function appReducer(prevStore=[],action){

    switch (action.type) {
        case "ADD":
            console.log(prevStore);
            return [...prevStore,action.payload]
        case "REMOVE":    
            return prevStore.filter((i)=>(i.id!==action.payload))    
        default:
            return prevStore
    }
}

export default appReducer