var mapLimit = require('map-limit')
var request = require('request')

var defaultColors = {
  'duplicate': 'ededed',
  'greenkeeper': 'ededed',
  'starter': 'ffc0cb',
  'Priority: Critical': 'ee0701',
  'Priority: High': 'd93f0b',
  'Priority: Low': '0e8a16',
  'Priority: Medium': 'fbca04',
  'Status: Abandoned': '000000',
  'Status: Available': 'c2e0c6',
  'Status: Blocked': 'ee0701',
  'Status: In Progress': 'cccccc',
  'Status: On Hold': 'e99695',
  'Status: Proposal': 'd4c5f9',
  'Status: Review Needed': 'fbca04',
  'Type: Bug': 'ee0701',
  'Type: Documentation': '5319e7',
  'Type: Enhancement': '1d76db',
  'Type: Maintenance': 'fbca04',
  'Type: Question': 'cc317c'
}

module.exports = githubStandardLabels

// https://developer.github.com/v3/issues/labels/
function githubStandardLabels (opts, cb) {
  var organization = opts.organization
  var github = opts.github
  var repo = opts.repo
  var colors = typeof opts.colors !== 'undefined' ? require(opts.colors) : defaultColors

  var auth = github.token + ':x-oauth-basic@'
  var uri = 'https://' + auth +
    'api.github.com/repos/' +
    organization + '/' + repo + '/labels'

  var reqOpts = {
    uri: uri,
    headers: { 'User-Agent': github.user }
  }

  var labels = null
  var operations = [
    getLabels,
    cleanLabels,
    createLabels
  ]

  mapLimit(operations, 1, iterator, cb)

  function iterator (fn, cb) {
    fn(cb)
  }

  function getLabels (done) {
    request(reqOpts, function (err, res, body) {
      if (err) return done(err)
      if (res.statusCode !== 200) {
        return done(new Error('non-200 statusCode received. ' + body))
      }
      if (!body) return done(new Error('no body returned'))

      try {
        labels = JSON.parse(body)
      } catch (e) {
        return done(e)
      }

      done()
    })
  }

  function cleanLabels (done) {
    mapLimit(labels, 1, iterator, done)

    function iterator (label, done) {
      var opts = {
        uri: uri + '/' + label.name,
        headers: { 'User-Agent': github.user }
      }
      request.del(opts, function (err, res, body) {
        if (err) return done(err)
        if (res.statusCode !== 204) {
          return done(new Error('non-204 statusCode received. ' + body))
        }
        done()
      })
    }
  }

  function createLabels (done) {
    mapLimit(Object.keys(colors), 1, iterator, done)
    function iterator (name, done) {
      var color = colors[name]
      var opts = {
        uri: uri,
        headers: { 'User-Agent': github.user }
      }
      var req = request.post(opts, function (err, res, body) {
        if (err) return done(err)
        if (res.statusCode !== 201) {
          return done(new Error('non-201 statusCode received. ' + body))
        }
        done()
      })

      req.end(JSON.stringify({
        name: name,
        color: color
      }))
    }
  }
}
