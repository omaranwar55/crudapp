import React ,{Component}from 'react';
import './App.css';
import CourseList from './Components/CourseList';
import CourseForm from './Components/CourseForm';

class App extends Component {
  state={
    courses:[
      {id:1 ,course:'HTML' },
      {id:2 ,course:'CSS' },
      {id:3 ,course:'JQuery' },
      {id:4 ,course:'PHP' }
    ]
    }
    Additem=(item)=>{
      item.id=Math.random();
      let courses=this.state.courses;
      courses.push(item);
      this.setState({courses});
      console.log(this.state.course) 
    }
    
  
  UpdateList=(id)=>{
   return (
     <form>
       <input type="text"/>
       <button>Update Course</button>
     </form>
   )
}
 deletecourse=(index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })
 }
 editCourse=(index,value)=>{
   let courses = this.state.courses;
   let course = courses[index];
   course['course']=value;
   this.setState({
     courses
   })
 }
  render(){    
    const {courses}=this.state;
    let lenght=courses.length;
    const courseList=lenght ? (
      courses.map((course , index) =>{
      return <CourseList details={course} index={index} update={this.UpdateList} deletecourse={this.deletecourse} editCourse={this.editCourse} />
      })):(<p className="noItem">There Is No Courses To Show</p>)    
  return (
   <section className="App">
     <h1>Add Courses</h1>
     <CourseForm  Additem={this.Additem} />
     <ul>{courseList}</ul>
   </section>
  );
  }
}

export default App;
