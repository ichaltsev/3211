# Averix Backend API

FastAPI backend for the Averix decentralized prop trading platform.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- MongoDB (local or cloud)
- pip or poetry

### Local Development

1. **Install Dependencies**
```bash
pip install -r requirements.txt
```

2. **Environment Setup**
```bash
# Copy and configure environment variables
cp .env.example .env
# Edit .env with your MongoDB connection and other settings
```

3. **Start MongoDB**
```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or install MongoDB locally
# macOS: brew install mongodb-community
# Ubuntu: sudo apt-get install mongodb
```

4. **Run the Server**
```bash
# Development mode with auto-reload
uvicorn server:app --reload --host 0.0.0.0 --port 8000

# Production mode
uvicorn server:app --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## 📁 Project Structure

```
backend/
├── server.py           # Main FastAPI application
├── requirements.txt    # Python dependencies
├── .env               # Environment variables
├── .env.example       # Environment template
└── README.md          # This file
```

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```bash
# Database
MONGO_URL=mongodb://localhost:27017
DB_NAME=averix_db

# CORS (comma-separated origins)
CORS_ORIGINS=http://localhost:3000,https://ichaltsev.github.io

# Server
HOST=0.0.0.0
PORT=8000
DEBUG=False

# Security
SECRET_KEY=your-secret-key-here
JWT_SECRET=your-jwt-secret-here
```

## 📡 API Endpoints

### Health & Status
- `GET /api/` - API root with version info
- `GET /api/health` - Health check endpoint

### Status Checks
- `GET /api/status` - Get all status checks
- `POST /api/status` - Create new status check

### Example Usage

```bash
# Health check
curl http://localhost:8000/api/health

# Create status check
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "test-client"}'

# Get all status checks
curl http://localhost:8000/api/status
```

## 🗄️ Database

### MongoDB Collections

- `status_checks` - Client status check records
  - `id`: Unique identifier
  - `client_name`: Client identifier
  - `timestamp`: UTC timestamp

### Database Commands

```bash
# Connect to MongoDB
mongosh

# Use database
use averix_db

# View collections
show collections

# Query status checks
db.status_checks.find().pretty()
```

## 🚀 Deployment

### Docker Deployment

```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Environment-Specific Configs

**Development**
```bash
DEBUG=True
CORS_ORIGINS=http://localhost:3000
```

**Production**
```bash
DEBUG=False
CORS_ORIGINS=https://ichaltsev.github.io,https://yourdomain.com
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
```

## 🔒 Security

- **CORS**: Configured for specific origins
- **Environment Variables**: Sensitive data in `.env`
- **Input Validation**: Pydantic models for request validation
- **Error Handling**: Proper HTTP status codes

## 📊 Monitoring

### Health Check
The `/api/health` endpoint provides:
- Service status
- Timestamp
- Version information

### Logging
Structured logging with timestamps and log levels:
```python
logger.info("Status check created", extra={"client": client_name})
```

## 🧪 Testing

```bash
# Install test dependencies
pip install pytest pytest-asyncio httpx

# Run tests
pytest

# Run with coverage
pytest --cov=server
```

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Check if MongoDB is running
docker ps | grep mongo
# Or
systemctl status mongod
```

**CORS Issues**
- Verify `CORS_ORIGINS` includes your frontend URL
- Check browser network tab for preflight requests

**Port Already in Use**
```bash
# Find process using port 8000
lsof -i :8000
# Kill process
kill -9 <PID>
```

### Logs
Check application logs for detailed error information:
```bash
# Development
uvicorn server:app --reload --log-level debug

# Production
tail -f /var/log/averix-backend.log
```

## 📞 Support

- **Email**: averix.found@gmail.com
- **Issues**: GitHub Issues
- **Documentation**: API docs at `/docs` (Swagger UI)
