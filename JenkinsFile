pipeline {
    agent any

    environment {
        // ── Docker Hub ──
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
        DOCKER_IMAGE           = 'your-dockerhub-username/node-js-devops-project'  // ← CHANGE THIS
        IMAGE_TAG              = "${BUILD_NUMBER}"

        // ── SonarQube ──
        SONAR_SCANNER_HOME = tool 'sonar-scanner'  // Name configured in Global Tool Configuration

    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {

        // ──────────────────────────────────────────
        // 1. Git Checkout
        // ──────────────────────────────────────────
        stage('Git Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        // ──────────────────────────────────────────
        // 2. Install Dependencies
        // ──────────────────────────────────────────
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        // ──────────────────────────────────────────
        // 3. SonarQube Analysis
        // ──────────────────────────────────────────
        stage('SonarQube Analysis') {
            steps {
                echo '🔍 Running SonarQube analysis...'
                withSonarQubeEnv('sonarqube-server') {  // Name configured in Manage Jenkins → System
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

        // ──────────────────────────────────────────
        // 4. SonarQube Quality Gate
        // ──────────────────────────────────────────
        stage('Quality Gate') {
            steps {
                echo '🚦 Waiting for SonarQube Quality Gate result...'
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        // ──────────────────────────────────────────
        // 5. Docker Build
        // ──────────────────────────────────────────
        stage('Docker Build') {
            steps {
                echo "🐳 Building Docker image: ${DOCKER_IMAGE}:${IMAGE_TAG}"
                sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} -f DockerFile ."
                sh "docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest"
            }
        }

        // ──────────────────────────────────────────
        // 6. Docker Push to Docker Hub
        // ──────────────────────────────────────────
        stage('Docker Push') {
            steps {
                echo '🚀 Pushing Docker image to Docker Hub...'
                sh "echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin"
                sh "docker push ${DOCKER_IMAGE}:${IMAGE_TAG}"
                sh "docker push ${DOCKER_IMAGE}:latest"
            }
        }

    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
            echo "Image pushed: ${DOCKER_IMAGE}:${IMAGE_TAG}"
            // Clean up Docker images from the Jenkins agent
            sh "docker rmi ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest || true"
        }
        failure {
            echo '❌ Pipeline failed! Check the logs above for details.'
        }
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
