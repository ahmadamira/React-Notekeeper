import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export default function NoteCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = (hover) => {
    setIsHovered(hover);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <CardContent
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          sx={{ height: "180px" }}
        >
          <Typography variant="h5" component="div">
            Do react task
          </Typography>
          <Typography variant="body2">thise is the note body</Typography>
          <Typography variant="h6" sx={{ color: "blue" }}>
            1-5-2023
          </Typography>

          {isHovered && (
            <IconButton
              sx={{ position: "absolute", bottom: "8px", right: "8px" }}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
