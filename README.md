# DSCI 6007 Course Portal

## 🌟 Overview

The **DSCI 6007 Course Portal** is a centralized, web-based platform designed to provide students and instructors with streamlined access to essential course components. It offers:

* **Course Description & Learning Objectives:** Foundational context for the course.

* **Weekly Academic Schedules:** Important dates and lecture topics.

* **Instructor & TA Office Hours:** Information on academic support availability.

* **Dynamically Updated Course Materials:** Real-time access to files hosted on AWS S3, reducing manual updates.

Built using modern JavaScript frameworks and hosted on GitHub Pages, the portal emphasizes ease of access, mobile responsiveness, and real-time content availability through seamless integration with Amazon S3.

## 🚀 Live Demo

Experience the portal live at:
<https://data-engineering-dr-sula.github.io/dsci6007/>

## ✨ Key Features

* **Publicly Accessible:** No login credentials required.

* **Mobile Responsive:** Optimized for various devices (desktop, tablet, mobile).

* **Dynamic S3 Integration:** Fetches and displays course files directly from an AWS S3 bucket, ensuring content is always up-to-date.

* **Intuitive Navigation:** Easy access to all sections via a fixed header navigation.

## 🛠️ Technical Stack

* **Frontend:** JavaScript/React

* **Hosting:** GitHub Pages

* **Storage:** AWS S3 (public-read bucket for course materials)

* **AWS Integration:** AWS SDK for JavaScript (v3) for S3 file listing.

## 📦 Getting Started (For Developers)

To set up and run the project locally, or to contribute:

### Prerequisites

* Node.js (LTS version recommended)

* npm (Node Package Manager)

### Installation

1. **Clone the repository:**

``` bash
git clone https://github.com/Data-Engineering-Dr-Sula/dsci6007.git
cd dsci6007
```

2. **Install dependencies:**
```bash
npm install
```

### Local Development

To start the development server:
``` bash
npm run dev
```

This will open the application in your browser, typically at `http://localhost:3000`.

### Deployment to GitHub Pages

The project is configured for continuous deployment via GitHub Pages. Deployment is automatically triggered on new commits pushed to the `main` branch, which then builds and serves the site.

1. **Ensure `homepage` field is configured in `package.json`:**

"homepage": "https://data-engineering-dr-sula.github.io/dsci6007"


This is crucial for paths to resolve correctly on GitHub Pages.

To deploy updates, simply push your changes to the `main` branch. GitHub Actions (if configured) or GitHub Pages' built-in automation will handle the build and deployment process. If you prefer manual deployment or are using a different branch, ensure the contents of your `build` directory are pushed to the `gh-pages` branch or the `docs/` directory of your `main` branch.

## 🔒 Security Considerations

* **AWS S3 Permissions:** The S3 bucket (`dsci6007site`) is configured for public read-only access. Write permissions are restricted via IAM policies.

* **Access Credentials:** AWS credentials are stored securely on the server side (environment variables) and *never* exposed in frontend JavaScript code.

* **No Upload Functionality:** The frontend does not expose any file upload functionality, preventing unauthorized content injection.

## 📞 Support and Contact

For questions, technical assistance, or to report an issue, please reach out to the project maintainer:

* **Maintainer:** Dipesh Mainali

* **Email:** dmain2@unh.newhaven.edu

* **Affiliation:** University of New Haven, Data Science Program

Feedback, suggestions, or contributions are always welcome!