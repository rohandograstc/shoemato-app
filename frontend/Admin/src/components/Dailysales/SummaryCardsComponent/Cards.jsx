import { Box, Typography } from "@mui/material";
import styles from "@/components/DashboardComponents/dashboard.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";

const Cards = () => {
  const cardArray = [
    {
      name: "Value",
      number: 5,
      unit: "Units",
    },
    
    {
      name: "Count",
      number: 5,
      unit: "Units",
    },
  ];

  return (
    <Box component="div" className={styles.cardContainer}>
      {cardArray.map((data, index) => (
        <Box key={index} className={styles.cardDiv}>
          <HeadingTypo variant="h5">{data.name}</HeadingTypo>
          <Box>
            <Typography variant="h1" className={styles.cardValue}>
              {data.number}
            </Typography>
            <Typography variant="span" className={styles.cardValueUnit}>
              {data.unit}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;