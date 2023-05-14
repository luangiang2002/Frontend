import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: "",
            studentName: "",
            age: 0,
            sex: true,
            birthDate: "",
            birthPlace: "",
            address: ""
        }
    }
    componentWillMount = () => {
        let { renderActionName, renderStudent } = this.props;
        if (renderActionName === "Close" || renderActionName === "Update") {
            this.setState({
                studentId: renderStudent.studentId,
                studentName: renderStudent.studentName,
                age: renderStudent.age,
                sex: renderStudent.sex,
                birthDate: renderStudent.birthDate,
                birthPlace: renderStudent.birthPlace,
                address: renderStudent.address
            })
        }
        else {
            this.setState({
                studentId: "",
                studentName: "",
                age: 0,
                sex: true,
                birthDate: "",
                birthPlace: "",
                address: ""
            })
        }
    }
    componentWillReceiveProps = (nextProps) => {
        let { renderActionName, renderStudent } = nextProps;
        if (renderActionName === "Close" || renderActionName === "Update") {
            this.setState({
                studentId: renderStudent.studentId,
                studentName: renderStudent.studentName,
                age: renderStudent.age,
                sex: renderStudent.sex,
                birthDate: renderStudent.birthDate,
                birthPlace: renderStudent.birthPlace,
                address: renderStudent.address
            })
        }
        else {
            this.setState({
                studentId: "",
                studentName: "",
                age: 0,
                sex: true,
                birthDate: "",
                birthPlace: "",
                address: ""
            })
        }
    }
    handleChange = (ev) => {
        let value = ev.target.value;
        let name = ev.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event, actionName) => {
        event.preventDefault();
        //sửa (update)  
        let student = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            age: this.state.age,
            sex: this.state.sex,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace,
            address: this.state.address,
        }
        this.props.onSubmit(actionName, student)

        this.props.onToggle(false);
    }

    render() {
        let { renderActionName } = this.props;
        return (

            <>
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={this.state.studentId}
                                    name='studentId'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={this.state.studentName}
                                    onChange={this.handleChange}
                                    name='studentName'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.age}
                                    name='age'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.sex}
                                    name='sex'>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy"
                                    onChange={this.handleChange}
                                    value={this.state.birthDate}
                                    name='birthDate' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.birthPlace}
                                    name='birthPlace' >
                                    <option value={"HN"}>Hà Nội</option>
                                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                                    <option value={"DN"}>Đà Nẵng</option>
                                    <option value={"QN"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" defaultValue={""}
                                    value={this.state.address}
                                    name='address' 
                                    onChange={this.handleChange}
                                        
                                    />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2"
                            onClick={(event) => { this.handleSubmit(event, renderActionName) }}>
                            {/* Submit */}
                            {renderActionName}
                        </button>
                    </form>
                </div>
            </>
        )
    }
}
