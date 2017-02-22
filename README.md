# github-standard-labels [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Create a standard set of issue labels for a GitHub project

## Usage
```txt
  Usage:
    $ github-standard-labels <username> <project>

  Commands:
    <default>   Create a set of labels for a project
    list        List all labels on a project

  Options:
    -h, --help      Print usage
    -v, --version   Print version
```

## API
### githubStandardLabels(opts, cb([err]))
Apply labels to a project. `opts` should be an object containing:
- __.github:__ an instance of `ghauth`
- __.username:__ the name of the project owner
- __.repo:__ the repository name

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
