var api = {
    getSensors(){
        var url = 'https://murmuring-waters-47073.herokuapp.com/sensor';
        return fetch(url).then((res) => res.json());
    }
};

module.export = api;