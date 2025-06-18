#!/bin/bash

# Schema Stumper Demo Setup Script
echo "🖍️  Setting up Schema Stumper with Crayon Factory Demo Database..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start PostgreSQL database
echo "🐘 Starting PostgreSQL database..."
docker-compose up -d

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Check if database is ready
until docker-compose exec postgres pg_isready -U postgres > /dev/null 2>&1; do
    echo "⏳ Still waiting for database..."
    sleep 2
done

echo "✅ Database is ready!"

# Start the application
echo "🚀 Starting Schema Stumper..."
echo "🌐 The app will open in your browser at http://localhost:3000"
echo "🛑 Press Ctrl+C to stop the application"
echo ""

DATABASE_NAME=crayon_factory DATABASE_SCHEMA=crayon_factory DATABASE_USER=postgres DATABASE_PASSWORD=password npm start 