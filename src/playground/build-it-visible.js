class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibily Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show details'} </button>
                    {this.state.visibility && (
                        <p>These are some Details</p>
                    )}
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'));



// const visible = {
//     title: "Visibily Toggle",
//     details: "These are some details"
// }
//
// const appRoot = document.getElementById('app');
// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     rendervis();
// }
//
// const rendervis = () => {
//     const visTemplate = (
//         <div>
//             <h1>{visible.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>{visible.details}</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(visTemplate, appRoot)
// }
//
// rendervis();
