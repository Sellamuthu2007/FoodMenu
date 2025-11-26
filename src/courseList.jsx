import {useState,useEffect} from "react";
// import HTML from './assets/HTML.png'
// import CSS from './assets/CSS.png'
// import NODE from './assets/node.png'
// import FSD from './assets/FSD.png'
// import reactImg from './assets/react.svg';
import Course from './courses.jsx';

function CoursesList(){
            let [courses,setCourses] = useState(null);            
            function handledelete(id){
                let newCourses = courses.filter((course)=> course.id != id)
                setCourses(newCourses)
            }

       
        //sort() --> return in ascending if x.price - y.price , descending if y.prices - x.prices;
        // courses.sort((x,y)=>{
        //     return x.price - y.price
        // })
        // const freeCourses = courses.filter((course)=>
        //      course.price <= 500
        // );
        //   courses.sort((x,y) => {
        //     //localeCompare retunrs
        //     //-1 x comes before y , 1 y before x ,0 both are equal
        //     return y.Name.localeCompare(x.Name)
        //  });

        // let [dummy,setDummy] = useState(true);
        // useEffect(()=>{
        //     console.log("use Effect function");
        //     console.log(dummy);
        // },[dummy]);
        let [error,setError] = useState(null);
        useEffect(() => {
            fetch("http://localhost:3000/courses")
            .then((res) =>{
                console.log(res)
                return res.json()
            }).then((data) =>{
                console.log(data);
                setCourses(data);
            }).catch((err) => {
                console.log(err.message);
                setError(err.message);
            });
        }, []);

        if(!courses){
            return (
            <>
                {error};
            </>
        )
        }
     const courseList = courses.map((course)=>
        <Course 
         key = {course.id}
         Name={course.name}
         timing={course.timing} 
         price={course.price} 
         image={course.image}
         delete ={handledelete}
         id = {course.id}
        
        />)
    return(
        <>
        {courseList} 
        /* <button onClick = {()=>setDummy(false)}>Dummy Button</button>
        </>
    );
}
export default CoursesList;