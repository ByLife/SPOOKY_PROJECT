module.exports = class SpookyBotClients {
    constructor(SpookyBot_clients){
        this.bsbc = SpookyBot_clients
        require('../utils/loadEvents')(SpookyBot_clients);
    }

    init(){
        this.bsbc.forEach(e => {
            e.connect()
        });
    }
}