# HTTP Status Code Contract Reference

Use these codes consistently across a REST API.

## Success
- `200 OK` – generic success; body present
- `201 Created` – resource created; `Location` header set
- `202 Accepted` – processing async
- `204 No Content` – success, no body

## Client errors
- `400 Bad Request` – malformed syntax (not a logic conflict)
- `401 Unauthorized` – missing/invalid credentials
- `403 Forbidden` – authenticated but not allowed
- `404 Not Found` – resource or route not found
- `405 Method Not Allowed` – wrong verb on the resource
- `409 Conflict` – state conflict (duplicate, version clash)
- `422 Unprocessable Entity` – validation/domain rule failure
- `429 Too Many Requests` – rate limited

## Server errors
- `500 Internal Server Error` – unexpected server fault
- `502/503/504` – gateway/unavailable/timeout

## Uniform error body

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "A human-readable summary",
    "traceId": "abc-123",
    "details": [
      { "field": "email", "message": "must be a valid email", "code": "INVALID_FORMAT" }
    ]
  }
}
```

Rules: stable machine codes; never leak stack traces; always include traceId; 4xx for client, 5xx for server; never 200 for failures.