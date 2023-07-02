import { AccountCircle } from "@mui/icons-material";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";

// CSS
import styles from "./page.module.css";
import { headingStyle } from "@/globalStyles/typoStyles";

const TopBar = (props) => {
  return (
    <AppBar position="fixed" className={styles.appBar} open={props.open}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 0.5,
          }}
        />
        <Box
          sx={{
            flexGrow: 0.5,
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" style={headingStyle} noWrap>
              Admin ID
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" style={headingStyle} noWrap>
              Greko
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={props.menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle
                sx={{
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
