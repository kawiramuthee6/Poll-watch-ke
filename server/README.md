# POLLWATCH Server

Backend API for the POLLWATCH election monitoring application.

## Features

- **JWT Authentication**: Secure token-based authentication
- **Incident Reporting**: Submit and manage election incident reports
- **File Upload**: Support for evidence uploads (photos/videos)
- **Role-based Access**: Public viewing, authenticated reporting, admin verification
- **MongoDB**: Document storage with Mongoose ODM

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/pollwatch
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   NODE_ENV=development
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Incidents

- `GET /api/incidents` - Get all verified incidents (public)
- `GET /api/incidents/:id` - Get single incident details
- `POST /api/incidents` - Submit new incident report (authenticated)
- `PUT /api/incidents/:id` - Update incident status (admin)
- `DELETE /api/incidents/:id` - Delete incident (admin/reporter)
- `GET /api/incidents/user/incidents` - Get user's reports (authenticated)

### Authentication

Custom JWT authentication with register/login endpoints.

## Incident Types

- `violence` - Violence / Intimidation
- `bribery` - Vote Buying / Bribery
- `tech-failure` - KIEMS Kit / Tech Failure
- `long-queues` - Excessive Queues / Delays
- `missing-materials` - Missing Materials
- `agent-issues` - Party Agent Issues
- `irregularities` - Procedural Irregularities
- `other` - Other

## File Upload

- Supports JPEG, JPG, PNG, GIF, MP4, MOV, AVI
- Max 10MB per file
- Stored in `server/uploads/` directory
- Accessible via `/uploads/filename`

## Status Workflow

1. `pending` - New report, awaiting review
2. `verified` - Confirmed by admin, visible to public
3. `flagged` - Marked as inappropriate
4. `resolved` - Issue addressed

## Security

- JWT token verification
- Role-based permissions (user/admin)
- Input validation with express-validator
- File type and size restrictions
- Anonymous reporting option
