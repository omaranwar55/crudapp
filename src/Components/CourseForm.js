import React , {Component} from 'react';

class CourseForm extends Component{
    state={        
        course:"",
        current:""
    }
    handlechange=(e)=>{
        this.setState({
          course:e.target.value,
          current:e.target.value          
       })
    }

    handlesubmit=(e)=>{
        e.preventDefault();
        if(this.state.course !==""){
        this.props.Additem(this.state); 
        this.setState({
            current:"",
            course:""
        })
    }
        else alert("There Is No Course To Add It..")      
    }
    render(){
    return(
        <div>
        <form onSubmit={this.handlesubmit}>
            <input type="text" value={this.state.current} placeholder="enter your course..." id="course" onChange={this.handlechange} />
            <button type="submit">Add Course</button>
        </form>
        </div>
        );    
    }
}
export default CourseForm;