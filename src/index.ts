import app from './server';
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is running on port:${PORT}`);
})