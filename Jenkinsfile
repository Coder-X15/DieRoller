pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Images') {
            steps {
                echo 'build stage placeholder'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'test stage placeholder'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'apt-get update && apt-get install -y docker-compose'
                    sh 'docker-compose up'
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
