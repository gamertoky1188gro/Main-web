import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

function sendEM(fromE, toE, msgS, bT, aP) {
    fetch('http://localhost:9000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fromEmail: fromE,
            toEmail: toE,
            messageSubject: msgS,
            bodyText: bT,
            attachmentPath: aP,
            htmlBody: "",
            msgType: "PRIMARY"
        })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
        .then(data => {
            console.log('Email sent successfully:', data);
            alert('Email sent successfully');
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Error sending email:', error);
        });
}

function iv(vue) {
    return document.getElementById(vue).value;
}

export const Contact = () => {
    function SBW(Cc, dD) {
        const email = iv("EMAIL");
        const name = iv("NAME");
        const description = iv("DESCRIPTION");

        if (!email || !name || !description) {
            console.error("Please check the inputs. fill all the inputs. or if u filled but error showing please contact with site owner(tokyintelligentgamer@gmail.com). the inputs replied: ", [iv("EMAIL"), iv("NAME"), iv("DESCRIPTION")]);
            alert("Please check the inputs. fill all the inputs. or if u filled but error showing please contact with site owner(tokyintelligentgamer@gmail.com). the inputs replied: " + iv("EMAIL") + iv("NAME") + iv("DESCRIPTION"));
        } else {
            sendEM(
                "custombot000@gmail.com",
                "tokyintelligentgamer@gmail.com",
                Cc,
                dD,
                ""
            );
        }
    }

    return (
        <Container className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" maxWidth="sm" style={{ marginTop: "10%" }}>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="h1" className="mb-4">
                    Contact Us
                </Typography>
                <TextField
                    fullWidth
                    required
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    className="mb-3"
                    id="NAME"
                />
                <TextField
                    fullWidth
                    required
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    className="mb-3"
                    id="EMAIL"
                />
                <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    className="mb-3"
                    id="SUBJECT"
                />
                <TextField
                    fullWidth
                    required
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    className="mb-3"
                    id="DESCRIPTION"
                />
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUpload />}
                    className="mb-3"
                >
                    Upload Attachment
                    <input type="file" hidden />
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    size="large"
                    onClick={() => SBW(
                        iv("SUBJECT") || "No Subject",
                        `
                            Email: ${iv("EMAIL")}
                            Name: ${iv("NAME")}
                            
                            ${iv("DESCRIPTION")}
                        `
                    )}
                >
                    Send
                </Button>
            </Box>
        </Container>
    );
};
