import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const shareContent = async (title, description, image) => {
    const shareData = {
        title: title || 'Default Title',
        text: description || 'Default Description',
    };

    // Check if image is a data URI and attempt to convert it to a Blob URL
    if (image && image.startsWith("data:")) {
        try {
            const response = await fetch(image);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            console.log('Blob URL:', imageUrl); // Debugging Blob URL

            // Use the current page URL as fallback if the Blob URL can't be shared
            if (!imageUrl.startsWith("blob:")) {
                shareData.url = imageUrl;
            } else {
                shareData.url = window.location.href;
            }
        } catch (error) {
            console.error('Error creating Blob URL:', error);
            shareData.url = window.location.href;
        }
    } else if (image && (image.startsWith("http://") || image.startsWith("https://"))) {
        // Only set URL if it's a valid HTTP/HTTPS URL
        shareData.url = image;
    } else {
        shareData.url = window.location.href;
    }

    // Ensure shareData.url is valid
    if (!shareData.url) {
        console.error('Share URL is invalid:', shareData.url);
        return;
    }

    if (navigator.share) {
        navigator
            .share(shareData)
            .then((abc) => console.log('Successfully shared', abc))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        console.log('Web Share API not supported');
    }
};


export const Logos = () => {
    const [RSR, setRSR] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const spreadsheetId = '1rEt2cElyUVb0GHGifzwBlpl5zhcJHjXOW0awfTbGvK8';
            const range = 'Sheet1!1:1000'; // Adjust the range as needed

            try {
                const response = await fetch(
                    `https://tutorial-chocolate-phases-cow.trycloudflare.com/api/sheets/readSingleRange?spreadsheetId=${spreadsheetId}&range=${range}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                const data = await response.json();
                if (data && data.length > 0) {
                    setRSR(data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{fontSize: '22px'}}>
            {/*<h1>Logos Page</h1>*/}
            <div className="container" style={{marginTop: '4%'}}>
                <div className="card row shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto">
                    <h5 className="card-header shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto">My Logos</h5>
                    {RSR.slice(1).map((value, index) => (
                        <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto">
                                <Card sx={{maxWidth: 345}}>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                sx={{
                                                    bgcolor: red[500],
                                                    backgroundImage: `url(${value[3]})`, // Use URL as background if provided
                                                    backgroundSize: 'cover',            // Cover the avatar area
                                                    backgroundPosition: 'center'        // Center the image
                                                }}
                                                aria-label="recipe"
                                            >
                                                ‎
                                            </Avatar>
                                        }
                                        title={value[6] || 'Default Title'}
                                        subheader={value[4] || 'Default Subheader'}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={value[3] || '/static/images/cards/default.jpg'}
                                        alt="Recipe image"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            {value[2] || 'Default Description'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="share"
                                                    onClick={() => shareContent(value[6], value[2], value[3])}>
                                            <ShareIcon/>
                                        </IconButton>
                                        <IconButton
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                            style={{
                                                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s'
                                            }}
                                        >
                                            <ExpandMoreIcon/>
                                        </IconButton>
                                        <Button size="small" onClick={() => {
                                            const url = value[7];

                                            if (!url) {  // Check for an empty or null URL
                                                const nw = window.open('', '_blank');

                                                nw.document.write(`
            <h1>Something went wrong in finding the product. Please contact with site owner!</h1>
        `);
                                                nw.document.close();
                                            } else {
                                                window.open(url, '_blank');  // Specify '_blank' to open in a new tab
                                            }
                                        }}>
                                            Order
                                        </Button>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography sx={{marginBottom: 2}}>Other contents:</Typography>
                                            <Typography sx={{marginBottom: 2}}>
                                                Publisher: {value[0] || <h1>Sorry! nothing found</h1>} <br/>
                                                Type: {value[1] || <h1>Sorry! nothing found</h1>} <br/>
                                                Is published: {value[5] || <h1>Sorry! nothing found</h1>}
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
