import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
    handleView = (toggle, actionName, student) => {
        this.props.onView(toggle, actionName, student)
    }
    handleEdit = (toggle, actionName, student) => {
        this.props.onEdit(toggle, actionName, student)
    }
    handleRemove = ( student) => {
        this.props.onRemove( student)
    }
    render() {
        let { renderStudents } = this.props;
        let elementStudent = renderStudents.map((student, index) => {
            return (
                <Student key={index} renderStudent={student} stt={index + 1}
                    onView={this.handleView}
                    onEdit={this.handleEdit}
                    onRemove={this.handleRemove}
                ></Student>
            )
        })
        return (
            <>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementStudent}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
