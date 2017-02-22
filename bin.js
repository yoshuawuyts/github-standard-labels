#!/usr/bin/env node

var minimist = require('minimist')
var ghauth = require('ghauth')

var githubStandardLabels = require('./')

var argv = minimist(process.argv.slice(2), {
  boolean: [
    'version',
    'help'
  ]
})

var usage = `
  Usage:
    $ github-standard-labels <username> <project>

  Commands:
    <default>   Create a set of labels for a project
    list        List all labels on a project

  Options:
    -h, --help      Print usage
    -v, --version   Print version
`

;(function main (argv) {
  if (argv.h) {
    return console.info(usage)
  } else if (argv.v) {
    return console.info('v' + require('./package.json').version)
  } else {
    var username = argv._[0]
    var repo = argv._[1]
    if (!username || !repo) {
      console.error('username or repo missing')
      process.exit(1)
    }
    label(username, repo)
  }
})(argv)

function label (username, repo) {
  var config = {
    configName: 'github-standard-labels',
    scopes: ['repo'],
    note: 'This is for github-standard-labels'
  }

  ghauth(config, function (err, github) {
    if (err) throw err

    var opts = {}

    opts.username = username
    opts.github = github
    opts.repo = repo

    githubStandardLabels(opts, function (err) {
      if (err) throw err
      console.info('Labels successfully applied to ' + username + '/' + repo)
    })
  })
}
