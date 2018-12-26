import {createServer} from 'http';
import app from './server';

const server = createServer(app);
let currentApp = app;


const port = 3000;
server.listen(port, () => {
	console.log('Server listening on port: ' + port);
});

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp);
		server.on('request', app);
		currentApp = app;
	});
}