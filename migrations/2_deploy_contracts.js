const EthMerchant = artifacts.require('./EthMerchant.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0xBABc837372167F4023b4DAa0C19F85af03133Ea4";
    deployer.deploy(EthMerchant, owner);
};
