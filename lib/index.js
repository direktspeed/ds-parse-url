var urlParseLax = require('url-parse-lax');
var parseDomain = require(__dirname+'/parseDomain');

//TODO: Better Interface :)
function parseUrl(url) {
  return {
    url,
    findDomainInPath(path) {
      //split / filter parseDomain
      return path.split('/').filter((part) => (parseDomain(part) !== null));
      //.map((res)=>[].concat.apply([], res));
    },
    urlParseLax,
    parseDomain
  };
}
module.exports = parseUrl();
