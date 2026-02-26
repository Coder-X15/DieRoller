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
                    sh 'docker compose up -d'
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
