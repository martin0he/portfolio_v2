import { Box, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { Theme } from "../../theme";

interface TopbarProps {
  onIconClick: (iconTitle: string) => void;
}

const Topbar = ({ onIconClick }: TopbarProps) => {
  const icons = [
    <IconButton
      onClick={() => onIconClick("files")}
      key="files"
      sx={{
        color: Theme.colors.darkMode.WHITE,
        fontSize: { xs: "small", sm: "medium", md: "large", lg: "x-large" },
      }}
    >
      <FolderIcon color="inherit" fontSize="inherit" />
    </IconButton>,
    <IconButton
      onClick={() => onIconClick("github")}
      key="github"
      sx={{
        color: Theme.colors.darkMode.WHITE,
        fontSize: { xs: "small", sm: "medium", md: "large", lg: "x-large" },
      }}
    >
      <AccountTreeIcon color="inherit" fontSize="inherit" />
    </IconButton>,
    <IconButton
      onClick={() => onIconClick("info")}
      key="info"
      sx={{
        color: Theme.colors.darkMode.WHITE,
        fontSize: { xs: "small", sm: "medium", md: "large", lg: "x-large" },
      }}
    >
      <InfoOutlineIcon color="inherit" fontSize="inherit" />
    </IconButton>,
  ];

  return (
    <Box display="flex" flexDirection={"row"} gap={1} p={1}>
      {icons}
    </Box>
  );
};

export default Topbar;
