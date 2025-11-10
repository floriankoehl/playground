import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src="/pictures/Florian_Koehl_Foto.png" />

    </Stack>
  );
}