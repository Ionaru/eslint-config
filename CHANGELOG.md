# Changelog
All notable changes to my ESLint config will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->
## [6.0.0] - 2021-12-18
### BREAKING CHANGED
- Changed rule 'camelCase' to '@typescript-eslint/naming-convention'

### Added
- Support for eslint@8
- Support for eslint-plugin-sonarjs@0.11

## [5.3.0] - 2021-11-23
### Added
- Support for eslint-plugin-unicorn@39

## [5.2.0] - 2021-11-08
### Added
- Support for eslint-plugin-unicorn@38

## [5.1.0] - 2021-11-01
### Added
- Support for @typescript-eslint/eslint-plugin@5
- Support for eslint-plugin-jest@25
- Support for eslint-plugin-unicorn@37

## [5.0.1] - 2021-09-30
### No changes
- Version bump.

## [5.0.0] - 2021-09-29
### BREAKING CHANGES
- Updated eslint-plugin-jest peerDependency to 24.5.0.

### Added
- Support for eslint-plugin-sonarjs@^0.10.0
- Support for eslint-plugin-unicorn@^36.0.0

## [4.0.0] - 2021-07-27
### BREAKING CHANGES
- Added eslint-plugin-jest to peerDependencies.
- Added eslint-plugin-unicorn to peerDependencies.
- Changed rule 'tslint/object-literal-sort-keys' to 'sort-keys'
- Dropped support for Node.js 10.

### Added
- Linting and special exceptions for Jest testing files.
- Support for eslint-plugin-sonarjs@^0.8.0
- Support for eslint-plugin-sonarjs@^0.9.0

### Removed
- @typescript-eslint/eslint-plugin-tslint
- tslint

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

[Unreleased]: https://github.com/Ionaru/eslint-config/compare/6.0.0...HEAD
[6.0.0]: https://github.com/Ionaru/eslint-config/compare/5.3.0...6.0.0
[5.3.0]: https://github.com/Ionaru/eslint-config/compare/5.2.0...5.3.0
[5.2.0]: https://github.com/Ionaru/eslint-config/compare/5.1.0...5.2.0
[5.1.0]: https://github.com/Ionaru/eslint-config/compare/5.0.1...5.1.0
[5.0.1]: https://github.com/Ionaru/eslint-config/compare/5.0.0...5.0.1
[5.0.0]: https://github.com/Ionaru/eslint-config/compare/4.0.0...5.0.0
[4.0.0]: https://github.com/Ionaru/eslint-config/compare/3.1.0...4.0.0
[3.1.0]: https://github.com/Ionaru/eslint-config/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/Ionaru/eslint-config/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/eslint-config/compare/1.0.4...2.0.0
[1.0.4]: https://github.com/Ionaru/eslint-config/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/Ionaru/eslint-config/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/Ionaru/eslint-config/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Ionaru/eslint-config/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/eslint-config/compare/2c91352...1.0.0
