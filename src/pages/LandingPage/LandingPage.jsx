
import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Stand out with a professionally designed resume
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Create a resume that stands out and get the recruiters' attention from the start.
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/resumes/resume template-4.svg"
                alt="Resume Sample"
                style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

<Container className="three-step-process">
  <Typography variant="h4" className="header">
    Build your <span className="highlight">resume</span> in 3 easy steps
  </Typography>
  <Grid container spacing={3} className="steps">
    <Grid item xs={12} sm={6} className="step step-1">
      <img src="/images/home_page_image_1.png" alt="Pick Template" className="step-image" />
      <div className="step-text">
        <Typography variant="h6" className="sub-header"><span className="bullet">1.</span> Pick a Template</Typography>
        <Typography variant="body1" className="custom1-body1"> Fill in the blanks and see results in real-time.</Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} className="step step-2">
      <img src="/images/home_page_image_2.png" alt="Customize Layout" className="step-image" />
      <div className="step-text">
        <Typography variant="h6" className="sub-header"><span className="bullet">2.</span> Customize Your Layout</Typography>
        <Typography variant="body1" className="custom2-body1"> Adjust the layout and format to match your needs.</Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} className="step step-3">
      <img src="/images/home_page_image_3.png" alt="Download" className="step-image" />
      <div className="step-text">
        <Typography variant="h6" className="sub-header"><span className="bullet">3.</span> Hit 'Download'</Typography>
        <Typography variant="body1" className="custom3-body1"> Download your resume in PDF format, ready to be sent.</Typography>
      </div>
    </Grid>
  </Grid>
  <div className="circle"></div>
  <div className="square square-1"></div>
  <div className="square square-2"></div>
</Container>



      <Container className="sample-templates">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className="header">You can always pick any template you like</Typography>
            <Typography variant="body1">
              Choose from one of our expertly prepared resume types below, by using pre-established parts that have been endorsed by recruiters internationally, you can begin creating your resume in under 5 seconds, additionally, you can edit to fit your preferences and personality before clicking "Download". Even if you have never created a resume before, it is that SIMPLE to use!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="template-stack">
              <img src="/resumes/resume template-1.svg" alt="Template 1" className="template template1" />
              <img src="/resumes/resume template-2.svg" alt="Template 2" className="template template2" />
              <img src="/resumes/resume template-3.svg" alt="Template 3" className="template template3" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div className="illustration">
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src="/images/home_page_image_4.png" alt="Illustration" className="illustration-img" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className="header">Save your Resume for future use</Typography>
              <Typography variant="body1">
                Create an account effortlessly using your Google account and save your fully prepared resume for future use. Edit it anytime, ensuring your resume is always up-to-date and ready for job applications. Our resume builder simplifies the process, allowing you to create and save professional resumes with ease. Tailor your resume to different job applications quickly, making your job hunt more efficient.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
