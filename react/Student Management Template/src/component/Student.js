import React, { Component } from 'react'

export default class Student extends Component {
    handleView = (student) => {
        this.props.onView(true, "Close", student)
    }
    handleEdit= (student) => {
        this.props.onEdit(true, "Update", student)
    }
    handleRemove= (student) => {
        this.props.onRemove(false, student)
    }
    render() {
        let { renderStudent, stt } = this.props;
        return (

            <>
                <tr>
                    <td>{stt}</td>
                    <td>{renderStudent.studentId}</td>
                    <td>{renderStudent.studentName}</td>
                    <td>{renderStudent.age}</td>
                    <td>{(renderStudent.sex===true ||renderStudent.sex==="true") ? "Nam" : "Nữ"}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.handleView(renderStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={()=>this.handleEdit(renderStudent)}

                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                                onClick={()=>this.handleRemove(renderStudent)}
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>

            </>
        )
    }
}
