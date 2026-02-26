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
                script {
                    sh 'docker compose -f compose.yaml build'
                }
            }
        }
        stage('Run Tests') {
            steps {
                echo 'No tests defined (add backend/frontend tests as needed)'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment step can go here (push images, etc.)'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
