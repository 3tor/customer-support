import app from './index';
import { port } from './config';

app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

export default app;