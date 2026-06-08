pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-cred')
        DOCKER_IMAGE           = 'jibin321/node-js-devops-project'
        IMAGE_TAG              = "${BUILD_NUMBER}"
        SONAR_SCANNER_HOME     = tool 'sonar-scanner'
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }
    stages {
        stage('Git Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing Node.js dependencies...'
                sh 'npm install'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo '🔍 Running SonarQube analysis...'
                withSonarQubeEnv('sonarqube-server') {
                    sh """
                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                          -Dsonar.projectKey=node-js-devops-project \
                          -Dsonar.projectName='Node JS DevOps Project' \
                          -Dsonar.sources=. \
                          -Dsonar.exclusions='node_modules/**,coverage/**,public/**' \
                          -Dsonar.language=js
                    """
                }
            }
        }
        stage('Quality Gate') {
            steps {
                echo '🚦 Waiting for Quality Gate...'
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Docker Build') {
            steps {
                echo "🐳 Building ${DOCKER_IMAGE}:${IMAGE_TAG}"
                sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} -f DockerFile ."
                sh "docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest"
            }
        }
        stage('Docker Push') {
            steps {
                echo '🚀 Pushing to Docker Hub...'
                sh "echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin"
                sh "docker push ${DOCKER_IMAGE}:${IMAGE_TAG}"
                sh "docker push ${DOCKER_IMAGE}:latest"
            }
        }
    }
   post {
        success {
            echo "✅ Success — pushed ${DOCKER_IMAGE}:${IMAGE_TAG}"
            sh "docker rmi ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest || true"
        }
        failure {
            echo '❌ Pipeline failed — check logs above.'
        }
        always {
            echo '🧹 Pipeline finished.'
        }
    }
}
