"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT = 4000;
server_1.default.listen(PORT, () => {
    console.log(`App is running on port:${PORT}`);
});
