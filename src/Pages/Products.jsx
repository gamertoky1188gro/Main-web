import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useEffect, useState } from 'react';
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
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

export const Products = () => {
    const [RSR, setRSR] = useState([]);
    const [expanded, setExpanded] = useState({}); // Use an object to track which card is expanded
    const [loadingImages, setLoadingImages] = useState(true); // Track loading state
    const gg = {}; // Object to store each page as an image

    // Fetch data from the spreadsheet
    useEffect(() => {
        const fetchData = async () => {
            const spreadsheetId = '1JDMrD7OEkYAZP9fB_8a1vkLHgmfqW4Aa-m0sr1UJorM';
            const range = 'Sheet1!1:1000';

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

                if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

                const data = await response.json();
                if (data && data.length > 0) {
                    setRSR(data);
                    await loadPdfImages(data); // Load PDF images after data is fetched
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    // Load PDF images for all products
    const loadPdfImages = async (data) => {
        for (const value of data) {
            await pdfToImages(value[3]);
        }
        setLoadingImages(false); // Set loading to false after images are loaded
    };

    // Convert PDF pages to images
    const pdfToImages = async (pdfPath) => {
        const pdf = await pdfjsLib.getDocument(pdfPath).promise;

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;

            gg[pageNumber] = canvas.toDataURL('image/png');
        }
    };

    // Share content
    const shareContent = async (title, description, image) => {
        const shareData = {
            title: title || 'Default Title',
            text: description || 'Default Description',
        };

        if (image && image.startsWith("data:")) {
            try {
                const response = await fetch(image);
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                shareData.url = imageUrl.startsWith("blob:") ? window.location.href : imageUrl;
            } catch (error) {
                console.error('Error creating Blob URL:', error);
                shareData.url = window.location.href;
            }
        } else if (image && (image.startsWith("http://") || image.startsWith("https://"))) {
            shareData.url = image;
        } else {
            shareData.url = window.location.href;
        }

        if (navigator.share) {
            navigator
                .share(shareData)
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            console.log('Web Share API not supported');
        }
    };

    const handleExpandClick = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div style={{ fontSize: '22px' }}>
            <div className="container" style={{ marginTop: '4%' }}>
                <div className="card row shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto">
                    <h5 className="card-header shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto text-center">Other Products</h5>
                    {RSR.slice(1).map((value, index) => (
                        <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                sx={{
                                                    bgcolor: red[500],
                                                    backgroundImage: `url(${value[3]})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
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
                                        component="div"
                                        height="194"
                                        sx={{ overflow: 'hidden' }}
                                    >
                                        <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                {!loadingImages ? (
                                                    Object.keys(gg).map((key, i) => (
                                                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={key}>
                                                            <img src={gg[key]} className="d-block w-100" alt={`Page ${key}`} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center">Loading images...</div>
                                                )}
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {value[2] || 'Default Description'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="share" onClick={() => shareContent(value[6], value[2], value[3])}>
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handleExpandClick(index)}
                                            aria-expanded={expanded[index]}
                                            aria-label="show more"
                                            style={{
                                                transform: expanded[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s',
                                            }}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        <Button size="small" onClick={() => {
                                            const url = value[7];
                                            if (!url) {
                                                const nw = window.open('', '_blank');
                                                nw.document.write('<h1>Something went wrong in finding the product. Please contact the site owner!</h1>');
                                                nw.document.close();
                                            } else {
                                                window.open(url, '_blank');
                                            }
                                        }}>
                                            Order
                                        </Button>
                                    </CardActions>
                                    <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography sx={{ marginBottom: 2 }}>Other contents:</Typography>
                                            <Typography sx={{ marginBottom: 2 }}>
                                                Publisher: {value[0] || 'Sorry! nothing found'} <br />
                                                Type: {value[1] || 'Sorry! nothing found'} <br />
                                                Is published: {value[5] || 'Sorry! nothing found'}
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