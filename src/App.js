import "./styles.css";
import { Button, Grid, Typography } from "@mui/material";
import useCharacter from "./hooks/useCharacter";

export default function App() {
  const { characterName, characterImage, getCharacter } = useCharacter();

  return (
    <Grid className="App" container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Personaje: {`${characterName}`} </Typography>
      </Grid>
      <Grid item xs={12}>
        <img alt={characterName} src={characterImage} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={getCharacter}>
          Cambiar personaje
        </Button>
      </Grid>
    </Grid>
  );
}
