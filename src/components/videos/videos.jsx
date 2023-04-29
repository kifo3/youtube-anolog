import { Stack, Box } from "@mui/material";
import { VideoCard, ChanelCard, Loader } from '../';
// import Grid from '@mui/material/Grid';

const Videos = ({videos}) => {
    if(!videos.length) return <Loader />

    return(
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
        //         {videos.map(item => (
        //         <Grid item xs={1} sm={2} md={4} key={item.id.videoId}>
        //             {item.id.videoId && <VideoCard video={item} />}
        //             {item.id.channelId && <ChanelCard video={item} />}
        //         </Grid>
        //       ))}
        //     </Grid>
        // </Box>




        <Stack
			width={'100%'}
			direction={'row'}
			flexWrap='wrap'
			justifyContent='start'
			alignItems='start'
			gap={2}
		>
			{videos.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChanelCard video={item} />}
				</Box>
			))}
		</Stack>
    )
}

export default Videos;