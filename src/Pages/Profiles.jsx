import * as React from 'react';
import {useEffect, useState} from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

function addBookmark(url, title) {
    // For Internet Explorer
    if (window.sidebar && window.sidebar.addPanel) { // Firefox version <23
        window.sidebar.addPanel(title, url, '');
        alert("success")
    } else if (window.external && ('AddFavorite' in window.external)) { // IE version
        window.external.AddFavorite(url, title);
        alert("success")
    } else { // Other browsers
        if (window.sidebar) {
            // Firefox (older versions)
            window.sidebar.addPanel(title, url, '');
        } else if (window.opera && window.print) {
            // Opera
            var elem = document.createElement('a');
            elem.setAttribute('href', url);
            elem.setAttribute('title', title);
            elem.setAttribute('rel', 'sidebar');
            elem.click(); // This simulates a click to add the bookmark
        } else if (document.all) {
            // Internet Explorer
            window.external.AddFavorite(url, title);
        } else {
            // Other browsers (e.g., Chrome, Edge)
            alert('Press ' + (navigator.userAgent.indexOf('Mac') != -1 ? 'Command/Cmd' : 'Ctrl') + ' + D to bookmark this page.');
        }
    }
}


export const Profiles = ({profiles}) => {
    const [dataUrl, setDataUrl] = useState("");

    useEffect(() => {
        if (profiles.length > 0) {
            const [imgUrl1, imgUrl2] = [profiles[0][5], profiles[0][6]];
            lol(imgUrl1, imgUrl2);
        }
    }, [profiles]);

    async function lol(imgUrl1, imgUrl2) {
        if (!imgUrl1 || !imgUrl2) {
            alert('Please enter both image URLs.');
            return;
        }

        const img1 = await loadImage(imgUrl1);
        const img2 = await loadImage(imgUrl2);
        const canvas = document.getElementById('collageCanvas');
        const ctx = canvas.getContext('2d');

        // Draw the images on the canvas
        ctx.drawImage(img1, 0, 0, canvas.width / 2, canvas.height); // Left image
        ctx.drawImage(img2, canvas.width / 2, 0, canvas.width / 2, canvas.height); // Right image

        // Get the data URL
        const dataURL = canvas.toDataURL('image/webp');
        setDataUrl(dataURL);
    }

    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Handle cross-origin images
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    return (
        <>
            <canvas id="collageCanvas" width="800" height="400" style={{display: 'none'}}></canvas>
            <div className="container mt-4 mx-auto" style={{width: "85%", border: "none"}}>
                <div className="row mx-auto" style={{border: "none"}}>
                    {profiles.map((value, index) => (
                        <div className="col-md-4 mb-4" key={index} style={{border: "none"}}>
                            <div className="card" style={{border: "none"}}>
                                <Card key={index} sx={{width: 320}} className="bg-dark text-white">
                                    <Typography level="title-lg" className="text-white">{value[0]}</Typography>
                                    <Typography level="body-sm" className="text-white">{value[1]}</Typography>
                                    <IconButton
                                        aria-label="bookmark Bahamas Islands"
                                        variant="plain"
                                        color="neutral"
                                        size="sm"
                                        sx={{position: 'absolute', top: '0.875rem', right: '0.5rem'}}
                                        onClick={
                                            () => {
                                                addBookmark(value[4], value[0])
                                            }
                                        }
                                    >
                                        <BookmarkAdd/>
                                    </IconButton>
                                    <AspectRatio minHeight="120px" maxHeight="200px">
                                        <img src={dataUrl} alt="" loading="lazy"/>
                                    </AspectRatio>
                                    <CardContent orientation="horizontal">
                                        <div>
                                            <Typography level="body-xs" className="text-white">{value[2]}</Typography>
                                            <Typography sx={{fontSize: 'lg', fontWeight: 'lg'}}
                                                        className="text-white">{value[3]}</Typography>
                                        </div>
                                        <Button
                                            variant="solid"
                                            size="md"
                                            color="primary"
                                            sx={{ml: 'auto', alignSelf: 'center', fontWeight: 600}}
                                            onClick={() => window.open(value[4] || window.location.href && alert("no url found"), '_blank')}
                                        >
                                            Explore
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
