import React from "react";
class Customers extends React.Component
{
    //componentDidMount() in Class Component
    state ={
        customers:[]
    };
    componentDidMount(){
        let data=[
            {id:101,name:"Charles"},
            {id:102,name:"Kumar"}
        ];
        this.setState({customers:data});        
    }
    render()
    {
        //Display Customer Data 
        return <div> 
            <h3>componentDidMount() Used</h3>      
            
        </div>;
    }
}
export default Customers;