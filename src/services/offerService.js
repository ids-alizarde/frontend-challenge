/*
 **  Se construye el consumo del API
 **  el API no regresa imagenes variadas
 */
const BASEURL = "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/";

const getOfferData = (method = "GET") => {
    const url = `${BASEURL}latest/directory`;
    return fetch(url);
};

export { getOfferData };
