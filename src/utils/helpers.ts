// formate date 

export const formDate =(date:string)=>{
    return new Date(date).toLocaleDateString("en-IN");

};


// calculate fine 

export const calculateFine =(dueDate:string)=>{
    const today =new Date ();
    const due =new Date(dueDate);

    if (today<=due) return 0;

    const daysLate = Math.ceil(
        (today.getTime()-due.getTime())/(1000*60*60*24)
    );

    return daysLate* 10; //10 rs per day
};


// capitalize 

export const capitalize = (text:string)=>{
    return text.charAt(0).toUpperCase()+ text.slice(1);
};


// short Id

export const shortId =(id:string)=>{
    return id.slice(-6);
};