const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        console.log(this.ctx.post())
        this.body = {
            errNo: 0
        };
    }
};
