import React ,{Component ,Fragment}  from 'react';

class CourseList extends Component{
    state={
        isEdit:false
    }
    rendercourse=()=>{
        return( 
        <li>
            <span>{this.props.details.course}</span> 
            <button onClick={()=>this.togglestate()}>Edit Course</button>
            <button onClick={()=>{this.props.deletecourse(this.props.index)}}>Delete Course</button>
        </li>
        )
    }
    togglestate=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit : !isEdit
        })
    }
    updatecourseitem=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.togglestate();
    }
    renderUpdateForm=()=>{
        return(
            <form onSubmit={this.updatecourseitem} >
                <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.course}/>
                <button>Update Course</button>
            </form>
        )
    }
    render(){
        let {isEdit}=this.state;
        return(
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.rendercourse()}
            </Fragment>
        )
    }
}
export default CourseList;