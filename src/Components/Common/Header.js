import React from "react";
import { Link } from "react-router-dom";


function Header()
{
    let data = [
        { to:'/',name: "Home"},
        { to:'/userdata',name: "User Data List"},
        { to:'/exportcsv',name: "Export CSV"},
        { to:'/enablebutton',name: "Enable Button"},
        { to:'/addmoreinput',name: "Add More Input"},
        { to:'/chartbar',name: "Chart Bar"},
        { to:'/notequill',name: "Note Quill"},
        { to:'/notettprism',name: "Note Tiptap prism"},
        { to:'/notett',name: "Note Tiptap"},
    ]
    return(
        <React.Fragment>
             <nav className="navbar">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="mt-0">Left Menu</h5>                    
                        <ul className="navbar-nav">
                            {data.map((item, index) => (
                                <li className="nav-item"><Link to={item.to} className="nav-link" key={index}>{item.name}</Link></li>
                            ))}
                            
                            {/* <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/userdata" className="nav-link">User Data List</Link></li>
                            <li className="nav-item"><Link to="/exportcsv" className="nav-link">Export Csv</Link></li>
                            <li className="nav-item"><Link to="/enablebutton" className="nav-link">Enable Button</Link></li>
                            <li className="nav-item"><Link to="/addmoreinput" className="nav-link">Add More Input</Link></li> */}
                            
                            
                
                        </ul>

                    </div>
                </div>
                </div>

            </nav>
        </React.Fragment>
    );
}

export default Header;