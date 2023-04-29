import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { colors } from '../../constants/colors'
import { ApiService } from "../../service/api.service";
import Category from "../category/category";
import Videos from "../videos/videos";

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const selectedCategoryHandler = category => setSelectedCategory(category)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
            } catch(error) { 
                console.log(error)
            }
        }

        getData()
    }, [selectedCategory])

    return (
        <Stack>
            <Category 
                selectedCategoryHandler={selectedCategoryHandler} 
                selectedCategory={selectedCategory}    
            />
            <Divider />
            <Box p={2} sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography variant="h4" fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Container>
            </Box>
        </Stack>
    )
}

export default Main;