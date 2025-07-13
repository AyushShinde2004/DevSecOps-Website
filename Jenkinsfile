pipeline{
  agent any
  enviroment{
    SONAR_HOME= tool "Sonar"
  }
  stages{
    stage("Clone the code"){
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
  }
}
