pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'type nul > .env'
                bat 'echo REACT_APP_SECRET_CODE=PUBLIC> .env'
                bat 'npm run build'
            }
        }
        stage('Docker Stuff') {
            steps {
                bat 'docker pull httpd'
                bat 'docker build -t notes-app .'
                bat 'docker run -dit --name my-running-app -p 8081:80 notes-app'
            }
        }
    }
}