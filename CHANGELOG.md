# Changelog
All notable changes to my ESLint config will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Support for eslint-plugin-unicorn@49

## [13.0.0] - 2022-09-15
### BREAKING CHANGES
- Dropped support for Node.js 16.

## [12.2.0] - 2022-09-15
### Added
- Support for eslint-plugin-sonarjs@0.21

## [12.1.1] - 2022-08-21
### No changes
- Version bump.

## [12.1.0] - 2023-08-20
### Added
- Support for eslint-plugin-sonarjs@0.20

## [12.0.0] - 2023-07-20
### BREAKING CHANGES
- Changed rules from eslint-plugin-unicorn
- Changed rules from typescript-eslint

### Added
- Support for eslint-plugin-unicorn@48

## [11.0.0] - 2023-06-14
### BREAKING CHANGES
- Convert package type to "module".
- Dropped support for Node.js 14.

### Removed
- Support for eslint-plugin-jest in this package, linting rules for test files will be a different package.

## [10.0.0] - 2023-05-22
### BREAKING CHANGES
- Added recommended rules from eslint-plugin-unicorn.

### Added
- Support for eslint-plugin-unicorn@47

### Removed
- Removed "I" prefix requirement for interface names (in @typescript-eslint/naming-convention).

## [9.2.0] - 2023-03-04
### Added
- Support for eslint-plugin-sonarjs@0.19

## [9.1.1] - 2023-03-04
### Fixed
- eslint-plugin-unicorn@46 support.

## [9.1.0] - 2023-03-04
### Added
- Support for eslint-plugin-unicorn@46

## [9.0.0] - 2023-02-12
### BREAKING CHANGES
- Removed eslint-plugin-no-null in favor of the eslint-plugin-unicorn rule.

### Added
- Support for eslint-plugin-sonarjs@0.18

### Fixed
- Unneeded rules being defined in the config.

### Changed
- Use import/recommended instead of import/warnings and import/errors.

## [8.5.0] - 2022-12-07
### Added
- Support for eslint-plugin-sonarjs@0.17

## [8.4.0] - 2022-12-02
### Added
- Support for eslint-plugin-unicorn@45

## [8.3.0] - 2022-10-28
### Added
- Support for eslint-plugin-sonarjs@0.16

## [8.2.0] - 2022-10-02
### Added
- Support for eslint-plugin-unicorn@44

## [8.1.0] - 2022-08-29
### Added
- Support for eslint-plugin-jest@27
- Support for eslint-plugin-sonarjs@0.15

## [8.0.0] - 2022-07-30
### BREAKING CHANGES
- Updated `eslint-plugin-jest` now adds 'jest/prefer-hooks-in-order' rule.

### Added
- Support for eslint-plugin-sonarjs@0.14
- Support for eslint-plugin-unicorn@43

## [7.0.1] - 2022-05-12
### No changes
- Version bump.

## [7.0.0] - 2022-05-12
### BREAKING CHANGES
- Added requirement for trailing delimiters in single-line interfaces and type literals in `@typescript-eslint/member-delimiter-style` rule.
- Dropped support for Node.js 12.

### Added
- Support for Node.js 18.

## [6.3.0] - 2022-04-04
### Added
- Support for eslint-plugin-sonarjs@0.13
- Support for eslint-plugin-unicorn@42

## [6.2.1] - 2022-02-26
### Fixed
- loosened `@typescript-eslint/naming-convention` and `no-underscore-dangle` rules in certain cases.

## [6.2.0] - 2022-02-22
### Added
- Support for eslint-plugin-sonarjs@0.12
- Support for eslint-plugin-unicorn@41

## [6.1.0] - 2022-02-05
### Added
- Support for eslint-plugin-jest@26
- Support for eslint-plugin-unicorn@40

## [6.0.0] - 2021-12-18
### BREAKING CHANGES
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

[Unreleased]: https://github.com/Ionaru/eslint-config/compare/13.0.0...HEAD
[13.0.0]: https://github.com/Ionaru/eslint-config/compare/12.2.0...13.0.0
[12.2.0]: https://github.com/Ionaru/eslint-config/compare/12.1.1...12.2.0
[12.1.1]: https://github.com/Ionaru/eslint-config/compare/12.1.0...12.1.1
[12.1.0]: https://github.com/Ionaru/eslint-config/compare/12.0.0...12.1.0
[12.0.0]: https://github.com/Ionaru/eslint-config/compare/11.0.0...12.0.0
[11.0.0]: https://github.com/Ionaru/eslint-config/compare/10.0.0...11.0.0
[10.0.0]: https://github.com/Ionaru/eslint-config/compare/9.2.0...10.0.0
[9.2.0]: https://github.com/Ionaru/eslint-config/compare/9.1.1...9.2.0
[9.1.1]: https://github.com/Ionaru/eslint-config/compare/9.1.0...9.1.1
[9.1.0]: https://github.com/Ionaru/eslint-config/compare/9.0.0...9.1.0
[9.0.0]: https://github.com/Ionaru/eslint-config/compare/8.5.0...9.0.0
[8.5.0]: https://github.com/Ionaru/eslint-config/compare/8.4.0...8.5.0
[8.4.0]: https://github.com/Ionaru/eslint-config/compare/8.3.0...8.4.0
[8.3.0]: https://github.com/Ionaru/eslint-config/compare/8.2.0...8.3.0
[8.2.0]: https://github.com/Ionaru/eslint-config/compare/8.1.0...8.2.0
[8.1.0]: https://github.com/Ionaru/eslint-config/compare/8.0.0...8.1.0
[8.0.0]: https://github.com/Ionaru/eslint-config/compare/7.0.1...8.0.0
[7.0.1]: https://github.com/Ionaru/eslint-config/compare/7.0.0...7.0.1
[7.0.0]: https://github.com/Ionaru/eslint-config/compare/6.3.0...7.0.0
[6.3.0]: https://github.com/Ionaru/eslint-config/compare/6.2.1...6.3.0
[6.2.1]: https://github.com/Ionaru/eslint-config/compare/6.2.0...6.2.1
[6.2.0]: https://github.com/Ionaru/eslint-config/compare/6.1.0...6.2.0
[6.1.0]: https://github.com/Ionaru/eslint-config/compare/6.0.0...6.1.0
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
