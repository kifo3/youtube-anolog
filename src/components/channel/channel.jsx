import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { ApiService } from '../../service/api.service'
import { Videos, ChanelCard } from '..'

const Channel = () => {
	const [channelDetail, setChannelDetail] = useState()
	const [videos, setVideos] = useState([])
	const { id } = useParams();
    console.log(id)

	useEffect(() => {
		const getData = async () => {
			try {
				const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
                console.log(dataChannelDetail)
				setChannelDetail(dataChannelDetail.items[0])
				const dataVideo = await ApiService.fetching(
					`search?channelId=${id}&part=snippet%2Cid&order=date`
				)
				setVideos(dataVideo?.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])
	

	return (
		<Box minHeight={'95vh'} mt={'1vh'}>
			<Box>
				<Box
					width={'100%'}
					height={'200px'}
					zIndex={10}
					sx={{
						backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<ChanelCard video={channelDetail} marginTop={'-100px'} />
			</Box>
			<Container maxWidth={'90%'}>
				<Videos videos={videos} />
			</Container>
		</Box>
	)
}


export default Channel;