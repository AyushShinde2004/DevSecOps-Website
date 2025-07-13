pipeline{
  agent any
  environment{
    SONAR_HOME= tool "Sonar"
  }
  stages{
    stage("Clone The Code"){
      steps{
        git url: "https://github.com/AyushShinde2004/DevSecOps-Website.git", branch: "main"
      }
    }
    stage("Quality Analysis"){
      steps{
        withSonarQubeEnv("Sonar"){
          sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=wanderlust -Dsonar.projectKey=wanderlust"
        }
      }
    }
    stage("Owsp Dc"){
      steps{
        dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'Dc'
        dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
      }
    }
    stage("Sonar Quality Gate"){
      steps{
        timeout(time:2,unit: "MINUTES"){
          waitForQualityGate abortPipeline: false
        }
      }
    }
    stage("Trivy"){
      steps{
        sh "trivy fs --format table -o trivy-fs-report.html ."
      }
    }
    stage("Deployment"){
      steps{
        sh "docker-compose up -d"
      }
    }
  }
}
