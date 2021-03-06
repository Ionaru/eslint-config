# Changelog
All notable changes to my ESLint config will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### BREAKING CHANGES
- Added eslint-plugin-jest to peerDependencies.
- Dropped support for Node.js 10.

### Added
- Linting and special exceptions for Jest testing files.
- Support for eslint-plugin-sonarjs@^0.8.0
- Support for eslint-plugin-sonarjs@^0.9.0

## [3.1.0] - 2021-05-05
### Added
- Support for eslint-plugin-sonarjs@^0.6.0
- Support for eslint-plugin-sonarjs@^0.7.0

## [3.0.0] - 2021-01-10
### BREAKING CHANGES
- Upgraded to @typescript-eslint/eslint-plugin 4.12.0.
- Upgraded to @typescript-eslint/eslint-plugin-tslint 4.12.0.
- Upgraded to eslint 7.17.0.

### Fixed
- No-shadow rule errors when using enums.

## [2.0.0] - 2020-09-07
### BREAKING CHANGES
- Changed 'optionalDependencies' to 'peerDependencies'.
- Upgraded to @typescript-eslint/eslint-plugin 4.1.1.
- Upgraded to @typescript-eslint/eslint-plugin-tslint 4.1.1.
- Upgraded to eslint 7.9.0.

### Added
- Testing

## [1.0.4] - 2020-06-19
### Fixed
- Security vulnerability in dependencies.

## [1.0.3] - 2020-03-22
### Fixed
- Security vulnerability in dependencies.

## [1.0.2] - 2020-03-22
### Fixed
- Security vulnerability in dependencies.

## [1.0.1] - 2020-01-30
### Fixed
- Wrong Switch-case default being set.

## [1.0.0] - 2020-01-24
### Added
- Initial version.

[Unreleased]: https://github.com/Ionaru/eslint-config/compare/3.1.0...HEAD
[3.1.0]: https://github.com/Ionaru/eslint-config/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/Ionaru/eslint-config/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/eslint-config/compare/1.0.4...2.0.0
[1.0.4]: https://github.com/Ionaru/eslint-config/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/Ionaru/eslint-config/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/Ionaru/eslint-config/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Ionaru/eslint-config/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/eslint-config/compare/2c91352...1.0.0
