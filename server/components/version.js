module.exports = function (loopbackApplication) {
    let version = loopbackApplication.loopback.version;
    console.log('LoopBack v%s', version);
};