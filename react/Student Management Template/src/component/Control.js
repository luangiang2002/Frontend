import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:''
        }
    }
    handleTongle = () => {
        this.props.onToggle(true, "Save");
    }
    handleSearch=(ev,keyword)=>{
            ev.preventDefault();
            this.props.onSearch(this.state.keyword);
    }
    handleSort=(ev)=>{
        let value=ev.target.value;
        let arr=value.split('-');
        this.props.onSort(arr[0],arr[1])
    }
    render() {
        return (
            <>
                <div className="card-header">
                    <div className="row">
                        <div className="col-3 ">
                            <button type="button" className="btn btn-primary btn-icon-text"
                                onClick={this.handleTongle}>
                                Thêm mới sinh viên
                            </button>
                        </div>
                        <div className="col-6 ">
                            <form className="search-form" action="#">
                                <i className="icon-search" />
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Here"
                                    title="Search here"
                                    value={this.state.keyword}
                                    name='keyword'
                                    onChange={(event)=>this.setState({keyword:event.target.value})}
                                />
                                <button className="btn btn-primary btn-icon-text"
                                onClick={this.handleSearch}>
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <select className="form-control" onClick={this.handleSort}>
                                <option value="">Xắp xếp</option>
                                <option value={"student-asc"}>tăng theo tên</option>
                                <option value={"student-desc"}>giảm theo tên</option>
                                <option value={"age-asc"}>tăng theo tuổi</option>
                                <option value={"age-desc"}>giảm theo tuổi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
