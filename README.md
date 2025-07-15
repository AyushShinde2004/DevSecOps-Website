# Wanderlust - Your Ultimate Travel Blog 🌍✈️

WanderLust is a simple MERN travel blog website ✈ This project is aimed to help people contribute to open source, upskill in React, master Git, and gain hands-on experience with DevOps tools like Jenkins, Docker, and CI/CD pipelines.

![Preview Image](https://github.com/krishnaacharyaa/wanderlust/assets/116620586/17ba9da6-225f-481d-87c0-5d5a010a9538)

## 🔗 Resources
- [Figma Design File](https://www.figma.com/file/zqNcWGGKBo5Q2TwwVgR6G5/WanderLust--A-Travel-Blog-App?type=design&node-id=0%3A1&mode=design&t=c4oCG8N1Fjf7pxTt-1)  
- [Discord Channel](https://discord.gg/FEKasAdCrG)

---

## 🎯 Project Goals

1. **Start Your Open Source Journey**  
   Learn the basics of Git and explore the MERN stack in a collaborative, beginner-friendly environment.

2. **React Mastery**  
   Strengthen your skills in React by working on real-world components—from form validations to performance optimizations.

3. **DevOps and CI/CD Integration**  
   Learn modern deployment practices using Docker, Jenkins, and GitHub Actions to automate testing and delivery pipelines.

---

## ⚙️ DevOps Workflow Highlights

- **CI/CD Pipeline**: Automated testing and deployment using Jenkins and GitHub Actions.
- **Dockerized Services**: Containerized frontend and backend for consistent development and production environments.
- **Secure & Scalable**: Code quality, linting, and security checks are integrated into the workflow.

---

## 🐳 Docker Setup 

To run the project in Docker containers:

```bash
# Build images
docker-compose build

# Start containers
docker-compose up
```

> Ensure Docker and Docker Compose are installed on your machine.

---

## 🚀 Jenkins Pipeline (CI/CD)

This project includes a `Jenkinsfile` that performs the following:

- Pulls latest code from GitHub
- Installs dependencies and runs lint checks
- Builds Docker images and pushes to Docker Hub
- Runs automated tests
- Deploys to a test or production environment

> Jenkins setup requires:
> - Docker and Node.js on the Jenkins agent
> - Credentials for GitHub and Docker Hub configured
> - GitHub webhook for push events

---

## 🧑‍💻 Setting Up the Project Locally

### Backend Setup

```bash
git clone https://github.com/{your-username}/wanderlust.git
cd wanderlust/backend
npm install
cp .env.sample .env
```

Ensure MongoDB is running locally (`mongodb://localhost:27017`). Import sample data:

```bash
mongoimport --db wanderlust --collection posts --file ./data/sample_posts.json --jsonArray
npm start
```

> Output:
> ```
> [BACKEND] Server is running on port 5000
> [BACKEND] Database connected: mongodb://127.0.0.1/wanderlust
> ```

### Frontend Setup

```bash
cd ../frontend
npm install
cp .env.sample .env.local
npm run dev
```


---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

