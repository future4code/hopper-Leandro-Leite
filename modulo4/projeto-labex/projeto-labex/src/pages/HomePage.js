import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
display:flex;
background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
justify-content:space-between;
align-items:center;
padding:0 20px; 
color:white;
      
`
const P = styled.p`
cursor:pointer;
`

const Nav = styled.nav`
background-color:lightcyan;
height:100vh;
`
const Button = styled.button`
background-color:rgba(17,102,105,1);
cursor: pointer;
border:none;
margin:200px 20px;
border-radius:5%;
height:50px;
`

function HomePage(){
   
   

        const navigate = useNavigate();
     
  
 
    return(
      

        <div>
            <header>
                <h2>LabeX</h2>
                <div>
                    <p>Menu</p>
                </div>

            </header>

            <nav>
                <button onClick={() => navigate("/trips/list")}>Ver Viagens</button>
                <button onClick={() => navigate("/login")}>Área do Adm</button>
            </nav>
        </div>
    )}

export default HomePage;