import { socketServer } from "./http";

socketServer.on("connection", (connection) => {
    console.log(connection.id);
    connection.join("1234") //change valeu for a room value, crate in table contact a ro0m id
    connection.on("message", (data) => {
        console.log(data);
        connection.to("1234").emit("message", data);
    })
})