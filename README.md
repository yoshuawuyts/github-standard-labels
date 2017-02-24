# github-standard-labels [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Create a standard set of issue labels for a GitHub project

## Usage
```txt
  Usage:
    $ github-standard-labels <username> <project>

  Commands:
    <default>   Create a set of labels for a project

  Options:
    -h, --help      Print usage
    -v, --version   Print version
```

## Labels
```txt
duplicate             #ededed
greenkeeper           #ededed
starter               #ffc0cb
Priority: Critical    #ee0701
Priority: High        #d93f0b
Priority: Low         #0e8a16
Priority: Medium      #fbca04
Status: Abandoned     #000000
Status: Available     #c2e0c6
Status: Blocked       #ee0701
Status: In Progress   #cccccc
Status: On Hold       #e99695
Status: Proposal      #d4c5f9
Status: Review Needed #fbca04
Type: Bug             #ee0701
Type: Documentation   #5319e7
Type: Enhancement     #1d76db
Type: Maintenance     #fbca04
Type: Question        #cc317c
```

See what they look like on the [demo issue][12].

## API
### githubStandardLabels(opts, cb([err]))
Apply labels to a project. `opts` should be an object containing:
- __.github:__ an instance of `ghauth`
- __.username:__ the name of the project owner
- __.repo:__ the repository name

## Acknowledgements
- [Joe Hand](https://github.com/joehand/) for showing me this cool labeling scheme

## See Also
- https://developer.github.com/v3/issues/labels

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/github-standard-labels.svg?style=flat-square
[3]: https://npmjs.org/package/github-standard-labels
[4]: https://img.shields.io/travis/yoshuawuyts/github-standard-labels/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/github-standard-labels
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/github-standard-labels/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/github-standard-labels
[8]: http://img.shields.io/npm/dm/github-standard-labels.svg?style=flat-square
[9]: https://npmjs.org/package/github-standard-labels
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://github.com/yoshuawuyts/github-standard-labels/issues/2
