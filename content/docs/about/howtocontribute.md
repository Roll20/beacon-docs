---
title: "How to Contribute"
description: "This is an advanced quick start sheet example. This sheet takes an advanced approach to building the Beacon sheet."
summary: ""
date: 2024-02-07T16:13:18+02:00
lastmod: 2024-09-07T16:13:18+02:00
draft: false
weight: 930
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

We appreciate your interest in contributing to the Beacon SDK project. Here are some guidelines to help you get started:

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by opening an issue in the GitHub repository. Provide as much detail as possible to help us understand and reproduce the issue.

### Suggesting Features

We welcome suggestions for new features. Please open an issue in the GitHub repository with a detailed description of the feature you would like to see and why you think it would be useful.

### Code Contributions

1. **Fork the Repository**: Create a personal fork of the project on GitHub.

2. **Clone the Fork**: Clone your fork to your local machine.

    ```bash
    git clone 
    ```

3. **Create a Branch**: Create a new branch for your work.

    ```bash
    git checkout -b feature-or-bugfix-description
    ```

4. **Make Changes**: Make your changes to the codebase. Follow the existing code style and conventions.

5. **Run Tests**: Ensure that all tests pass before submitting your changes.

    ```bash
    npm run ci-check
    ```

6. **Commit Changes**: Commit your changes with a descriptive commit message.

    ```bash
    git commit -m "Description of your changes"
    ```

7. **Push Changes**: Push your changes to your fork.

    ```bash
    git push origin feature-or-bugfix-description
    ```

8. **Create a Pull Request**: Open a pull request from your fork to the main repository. Provide a detailed description of your changes and why they should be merged.

### Running Tests

- **Unit Tests**: Run unit tests with Vitest.

    ```bash
    npm run test:unit
    ```

- **End-to-End Tests**: Run End-to-End tests with Cypress.

    ```bash
    npm run test:e2e
    ```

### Code Style

- Follow the existing code style and conventions.
- Use ESLint for linting.

    ```bash
    npm run lint
    ```

- Format code with Prettier.

    ```bash
    npm run format
    ```

## Communication

- **GitHub Issues**: Use GitHub issues for bug reports, feature requests, and questions.
- **Pull Requests**: Use GitHub pull requests to submit your code contributions.

Thank you for contributing to the Beacon SDK project!