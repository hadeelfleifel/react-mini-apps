import React,{Component}from 'react'
// import Right from './rightbar'

class Left extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        city:'',
        state:'',
        country:'',
        orgnisation:'',
        jobProfile:'',
        additionalInfo:''
    }
    render() { 
        return (  
            <div >
                <div className="border border-danger rounded">
                <p>hadeel@gmail.com</p>
                <p>123</p>
                <button onClick={this.props.data}>Click to View Details</button>
            
                </div>
                <br></br>
        
                <div className="border border-danger rounded">
                <p >bitar@gmail.com</p>
                <p>456</p>
                <button>Click to View Details</button>
                </div>
                <br></br>

                <div className="border border-danger rounded">
            
                <p>raghad@gmail.com</p>
                <p>789</p>
                <button>Click to View Details</button>
                </div>
                




            </div>
        );
    }
}
 
export default Left;