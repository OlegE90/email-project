import http from 'http';

import app from './server';

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

let currentApp = app;

server.listen(PORT, () => {
    console.log('Server listening on port '+ PORT);
});

// check if HMR is enabled
if(module.hot) {
    // accept update of dependency
    module.hot.accept(["./server"], function() {
        // replace request handler of server
        server.removeListener("request", currentApp);
        server.on("request", app);
        currentApp = app;
    });
}