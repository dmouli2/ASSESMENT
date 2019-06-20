import React from 'react';




export class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
            newtsk:[   
               
            ]
        };
    }

    render(){
        console.log(this.props.data);
        let status = this.props.data.completed ;
        var statusResult;
        if(status){
            statusResult = 'Completed';
        }
        else{
            statusResult = 'Not Completed';
        }
        return (
           
            <div className="col-4">
                <div className="card text-center">
                    <div className="card-header">
                    
                        {this.props.data.id}
                    </div>
                    <div className="card-body">
                    <h5 >Title:</h5>{this.props.data.title}
                         <h6>Status : </h6>{statusResult}
                    </div>
                    <div className="card-footer text-muted">
                    <button className="btn btn-danger" onClick = {
                                    ()=>{
                                       this.props.delete(this.props.data.id);

                                    }
                                }>Delete</button>
                    </div>
                </div>
            </div>
            
            
        );
    }


}