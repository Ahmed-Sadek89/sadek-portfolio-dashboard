"use client"
import { Box, Button, Typography, useTheme } from '@mui/material';
import { Formik, Form } from 'formik';
import { boxContainer } from '../../style';
import PersonalInformationSettings from './PersonalInformationSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import { initialValues, validationSchema } from './profileSettingsSchema';
import SocialMediaSettings from './SocialMediaSettings';



const ProfileSettings = () => {
  const theme = useTheme()

  return (
    <Box sx={{ ...boxContainer, gap: "0px", lineHeight: 0 }}>
      <Box
        sx={{
          width: "max-content",
          padding: "10px",
          bgcolor: "text.secondary",
          border: `1px solid text.primary`,
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "primary.main"
        }}
      ><SettingsIcon /> <Typography>Settings</Typography></Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values, handleChange }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              padding: "20px",
              border: `1px solid ${theme.palette.text.secondary}`,
            }}
          >
            <PersonalInformationSettings
              values={values}
              handleChange={handleChange}
            />

            <SocialMediaSettings
              values={values}
              handleChange={handleChange}
            />

            <Box>
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "info.main", color: "#fff", ":hover": { backgroundColor: "info.main", color: "#fff" } }}
              >
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik >
    </Box>
  );
};

export default ProfileSettings;
