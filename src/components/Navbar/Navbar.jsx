import { Box, Container} from "@mui/material"
import logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
import { Wrapper } from "./Wrapper"

function Navbar() {
  return (
    <Wrapper>
      <Container sx={{display:"flex",alignItems:"center"}}>
        <Box width="48px" height="48px" overflow="hidden" mr="40px">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </Box>
         <nav>
            <ul>
               <li><Link to="/">Home</Link></li>
            </ul>
         </nav>
      </Container>
    </Wrapper>
  )
}

export default Navbar