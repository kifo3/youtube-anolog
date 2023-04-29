import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
    return(
        <Box minHeight={'90vh'}>
            <Stack 
                direction={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                height={'100%'}
            >
                <CircularProgress color="success" />
            </Stack>
        </Box>
    )
}

export default Loader;