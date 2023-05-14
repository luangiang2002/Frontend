import React, { Component } from 'react'
import ListStudent from './component/ListStudent'
import Control from './component/Control'
import Form from './component/Form'

export default class App extends Component {
  constructor(props) {
    super(props);
    //mock data;
    let arrStudents = [
      { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
      { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
      { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" } ,
    ];
    //kiểm tra trong locaStorage; nếu có thì khởi tạo trong localStorage
    let list = [];
    if (localStorage.getItem("ListStudent") !== null) {
      list =JSON.parse( localStorage.getItem("ListStudent"));
    }else{
      list=arrStudents;
      localStorage.setItem(("ListStudent"),JSON.stringify(arrStudents));
    }
    this.state = {
      students: list,
      isToggle: false,
      actionName: '',
      student: {},
      searchData:'',
    }

  }
  handleToggle = (toggle, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
    })
  }
  handleView = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    })
  }
  handleEdit = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    })
  }
 
  handleSubmit=(actionName,student)=>{
    let {students}=this.state;
    if(actionName==="Update"){
      for (let i = 0; i < students.length; i++) {
        if(students[i].studentId===student.studentId)
        {
          students[i]=student;
        break;
        }
      }
      this.setState({
        students:students
      })
    }
    else if(actionName==="Save"){
      students.push(student);
      this.setState({
        students:students
      })
    }
     //cập nhật localStorage
  localStorage.setItem(("ListStudent"),JSON.stringify(students));
  }
  handleSearch=(keyword)=>{
      this.setState({
        searchData:keyword
      })
  }
  handleSort=(oderFill,oderBy)=>{
    this.setState({
      oderFill:oderFill,
      oderBy:oderBy,
    })
  }
  handleRemove = ( student) => {
    let { students } = this.state;
    let indexDelete = -1;
    students.forEach((item, index) => {
      if (item.studentId === student.studentId)
        indexDelete = index;
    })
    students.splice(indexDelete, 1);
    this.setState({
      students: students
    })
     //cập nhật localStorage
  localStorage.setItem(("ListStudent"),JSON.stringify(students));

 }
  render() {
    let { students, actionName, student } = this.state
    let elementForm = this.state.isToggle ? <Form
      renderStudent={student}
      renderActionName={actionName}
      onToggle={this.handleToggle}
      onSubmit={this.handleSubmit}
    /> : "";
  if(this.state.searchData!==''){
    students=students.filter(x=>x.studentName.toLowerCase().includes(this.state.searchData.toLowerCase()))
  }
 
  if(this.state.oderFill==="student"){
      if(this.state.oderBy==="asc"){
       students.sort((a,b)=>{
        let x = a.studentName.toLowerCase();
        let y = b.studentName.toLowerCase();
       if (x < y) {return -1;}
       if (x > y) {return 1;}
       return 0;})
      }
      else {
        students.sort((a,b)=>{
          let x = a.studentName.toLowerCase();
          let y = b.studentName.toLowerCase();
         if (x < y) {return 1;}
         if (x > y) {return -1;}
         return 0;})
       }
  }
  if(this.state.oderFill==="age"){
    if(this.state.oderBy==="asc"){
     students.sort((a,b)=>(a.age-b.age))
    }
    else {
      students.sort((a,b)=>(b.age-a.age) )
     }
}
    return (
      <div className='container-fluid mt-5'>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* <control  */}
              <Control onToggle={this.handleToggle}
              onSearch={this.handleSearch}
              onSort={this.handleSort}
              ></Control>
              {/* list student  */}
              <ListStudent renderStudents={students}
                onView={this.handleView}
                onEdit={this.handleEdit}
                onRemove={this.handleRemove}
              ></ListStudent>

            </div>
          </div>
          <div className="col-5 grid-margin">
            <div className="card">
              {/* form  */}
              {elementForm}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
