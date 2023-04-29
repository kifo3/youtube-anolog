import { Box, Stack, Typography } from "@mui/material";
import { logo } from '../../constants';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';
import SearchBar from "../search-bar/search-bar";



const Navbar = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} 
            sx={{position: 'sticky', top: 0, zIndex: 999, background: colors.primary, pl: 4 }}
        >
            <Box display={'flex'} gap={'15px'} direction={'column'}>
            <Link to='/'>
            <img src={logo} alt='logo' height={40} width={45} />
            </Link>
            <Typography variant={'h5'} fontFamily={"Segoe UI"} sx={{fontWeight: 'bold', color: colors.secondary, textAlign: 'center', alignItems: 'center'}}>MyTube</Typography>
            </Box>
            <SearchBar />
            <Box />
        </Stack>
    )
}

export default Navbar;